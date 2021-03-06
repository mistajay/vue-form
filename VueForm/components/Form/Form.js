import Vue from 'vue'
import isBoolean from 'lodash/isBoolean'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import isString from 'lodash/isString'
import isPlainObject from 'lodash/isPlainObject'
import mergeWith from 'lodash/mergeWith'
import omit from 'lodash/omit'
import isNil from 'lodash/isNil'
import camelCase from 'lodash/camelCase'
import Form from 'element-ui/lib/form'
import CONSTANTS from '../../constants'
import { VueFormStoreParams } from '../../store'
import props, { BUTTONS_POSITION } from './props'
import styles from './styles'
import FormItem from '../ConnectedFormItem'
import Button from '../Button'
import Notification from '../Notification'
import Popover from '../Popover'

export default {
  mergeCustomizer: (objValue, srcValue) => {
    if (Array.isArray(objValue)) {
      return srcValue
    }

    // Mostly handle undefined values that merge do not use
    if (isNil(srcValue)) {
      return null
    }

    return undefined
  },

  props,

  data() {
    return {
      saving: false,
    }
  },

  beforeMount() {
    this.store = new Vue(VueFormStoreParams)

    this.store.setInitialValues(this.initialValues)
    this.store.setHandleModelChange(this.handleModelChange)
    this.store.setBehaviourOnRemoveControl(this.keepValueOnRemove)
  },

  watch: {
    initialValues(initialValues, prevInitialValues) {
      if (!this.doNotWatchInitialValues && !isEqual(initialValues, prevInitialValues)) {
        this.store.reinitializeValues(initialValues)
        this.handleModelChange(this.store.state)
      }
    },
  },

  computed: {
    isSubmitButtonDisabled() {
      if (this.save) {
        return this.allButtonsDisabled
      }

      return (
        this.store.isDisabled ||
        (!this.allowSubmitPristineForm && this.store.isPristine) ||
        !this.store.isValid ||
        !!this.disabled
      )
    },

    allButtonsDisabled() {
      const { submitting, validating } = this.store.form

      return submitting || validating
    },

    submitButtonType() {
      return this.save ? 'danger' : 'primary'
    },

    submitButtonClassName() {
      return [
        `el-button--${this.submitButtonType}`,
        {
          'is-disabled': this.isSubmitButtonDisabled,
        },
      ]
    },

    buttons() {
      return {
        reset: isBoolean(this.cancel) ? 'Cancel' : this.cancel,
        save: isBoolean(this.save) ? 'Save' : this.save,
        submit: isBoolean(this.submit) ? 'Submit' : this.submit,
      }
    },

    extraButtons() {
      if (!this.renderExtraButtons) {
        return null
      }

      return (
        <div style="margin-left: 10px; margin-right: 10px">
          {this.renderExtraButtons(this.allButtonsDisabled)}
        </div>
      )
    },

    vueFormButtonsStyles() {
      const overridingStyles = {
        [BUTTONS_POSITION.CENTER]: styles.buttons_center,
        [BUTTONS_POSITION.END]: styles.buttons_end,
      }

      return [
        styles.buttons,
        overridingStyles[this.buttonsPosition],
        this.buttonsSticky && styles.buttons_container_sticky,
        this.buttonsStyles,
      ]
    },
  },

  methods: {
    // Should be called once
    [CONSTANTS.SECRET_VUE_FORM_METHOD](...args) {
      return this.store.registerFormControl(...args)
    },

    handleModelChange(values) {
      this.$emit('input', values)
    },

    handleFormDisabled(errors) {
      this.handleDisabled(errors || this.store.allErrors)
    },

    async nativeOnSubmit(event, isConfirmSubmit) {
      event.preventDefault()

      // Just don't do anything — some form process in progress
      if (this.store.isDisabled) {
        return false
      }

      const isSubmitButtonClick = event.type === 'click'
      const shouldPerformAllChecks = this.performAllChecksOnSave || isSubmitButtonClick
      const submitHandler =
        !isSubmitButtonClick && this.handleSave ? this.handleSave : this.handleSubmit

      if (shouldPerformAllChecks && !isNil(this.disabled)) {
        if (isString(this.disabled)) {
          return Notification.error(this.disabled)
        }

        if (isPlainObject(this.disabled)) {
          Notification.error(this.disabled.message)

          return this.handleFocusToInvalidField(this.disabled.id)
        }
      }

      if (shouldPerformAllChecks) {
        this.store.manageTouchedFieldsState()
      }

      // Form Level Sync Validate
      if (shouldPerformAllChecks && this.validate) {
        const syncErrors = this.validate(this.store.state)

        if (!isEmpty(syncErrors)) {
          this.store.addFormSyncErrors(syncErrors)

          return this.handleFormDisabled(syncErrors)
        }
      }

      if (!this.store.isValid && shouldPerformAllChecks) {
        this.handleFocusToInvalidField()

        return this.handleFormDisabled()
      }

      const formValues = mergeWith(
        {},
        omit(this.initialValues, this.store.removedFields),
        this.store.state,
        this.$options.mergeCustomizer
      )

      if (!isConfirmSubmit && shouldPerformAllChecks && this.confirmMessage) {
        if (!this.confirmHandler || (await this.confirmHandler(formValues))) {
          return this.$refs.confirmPopover.show()
        }
      }

      // Last case — pristine
      if (shouldPerformAllChecks && this.isSubmitButtonDisabled) {
        return false
      }

      const off = this.store.manageSubmittingState()

      const submitForm = () => Promise.resolve(submitHandler(formValues, isConfirmSubmit))

      const messages = this.messages || {}

      this.saving = !shouldPerformAllChecks
      const submitPromise = this.store.form.validating
        ? Promise.all(Object.values(this.store.asyncValidations)).then(submitForm)
        : submitForm()

      // Just subscribe to promise, do not catch errors
      submitPromise
        .then(
          () => Notification.success(messages.success),
          error => {
            if (error && error.error) {
              Notification.error(error.error)
            } else {
              Notification.error(messages.error)
            }

            this.handleFormDisabled()
          }
        )
        .then(() => {
          this.saving = false
          off()
        })

      return submitPromise
    },

    nativeOnReset(event) {
      event.preventDefault()

      this.store.resetValues()

      if (this.handleCancel) {
        this.handleCancel(this.initialValues)
      }
    },

    handleFocusToInvalidField(passedElementId) {
      const [name] = this.store.allErrorsFields
      const elementId = camelCase(passedElementId || name)

      let elementByName = this.$refs.vueFormNode.$el.querySelector(`[name=${elementId}]`)
      let elementById = this.$refs.vueFormNode.$el.querySelector(`#${elementId}`)

      if (!elementByName && !elementById) {
        elementByName = document.getElementsByName(elementId)[0] // eslint-disable-line
        elementById = document.getElementById(elementId)
      }

      if (/WebKit/.test(navigator.userAgent)) {
        if (elementByName) {
          elementByName.focus()
        }

        if (elementById) {
          if (elementById.scrollIntoView) {
            elementById.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
          } else {
            window.scroll(0, elementById.offsetParent.offsetTop)
          }
        }
      } else {
        const element = elementByName || elementById

        if (element && element.scrollIntoView) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
        }
      }
    },

    renderPlainSubmitButton() {
      return (
        <Button
          class={this.submitButtonClassName}
          type={this.submitButtonType}
          nativeType={!this.save ? 'submit' : undefined}
          on-click={this.nativeOnSubmit}>
          {this.buttons.submit}
        </Button>
      )
    },

    renderSubmitButton() {
      if (!this.submit) {
        return null
      }

      if (this.confirmMessage) {
        return (
          <Popover
            ref="confirmPopover"
            message={this.confirmMessage}
            cancel={this.confirmNo}
            confirm={this.confirmYes}
            width={this.confirmWidth}
            placement={this.confirmPlacement}
            trigger={this.confirmTrigger}
            handleConfirm={this.nativeOnSubmit}
            style={this.cancel || this.save ? 'margin-left: 10px' : undefined}>
            {this.renderPlainSubmitButton()}
          </Popover>
        )
      }

      return this.renderPlainSubmitButton()
    },

    renderPlainButtons() {
      return (
        <div style={this.vueFormButtonsStyles} class={this.buttonsClassName}>
          {this.cancel && (
            <Button nativeType="reset" disabled={this.allButtonsDisabled}>
              {this.buttons.reset}
            </Button>
          )}
          {this.extraButtons}
          {this.save && (
            <Button
              nativeType="submit"
              type="primary"
              disabled={this.allButtonsDisabled}
              loading={this.saving && this.store.form.submitting}>
              {this.buttons.save}
            </Button>
          )}
          {this.renderSubmitButton()}
        </div>
      )
    },

    renderButtons() {
      if (this.buttonsPosition === BUTTONS_POSITION.LABEL) {
        return <FormItem style="margin-bottom: 0">{this.renderPlainButtons()}</FormItem>
      }

      return this.renderPlainButtons()
    },

    renderFormContent() {
      if (this.$slots.default) {
        return this.$slots.default
      }

      if (this.$scopedSlots.default) {
        return this.$scopedSlots.default({
          state: this.store.state,
          allButtonsDisabled: this.allButtonsDisabled,
          isSubmitButtonDisabled: this.isSubmitButtonDisabled,
          submitButtonClassName: this.submitButtonClassName,
          submitting: this.store.form.submitting,
          validating: this.store.form.validating,
          dirty: this.store.form.dirty,
          handleSubmit: this.nativeOnSubmit,
          handleCancel: this.nativeOnReset,
        })
      }

      return null
    },
  },

  beforeDestroy() {
    this.store.$destroy()
  },

  render() {
    return (
      <Form
        novalidate
        autocomplete="off"
        ref="vueFormNode"
        label-width={this.labelWidth}
        label-suffix={this.labelSuffix}
        label-position={this.labelPosition}
        status-icon={this.statusIcon}
        nativeOnSubmit={this.nativeOnSubmit}
        nativeOnReset={this.nativeOnReset}>
        {this.renderFormContent()}
        {this.renderButtons()}
        {this.buttonsSticky && <div style={styles.sticky_placeholder} />}
      </Form>
    )
  },
}
