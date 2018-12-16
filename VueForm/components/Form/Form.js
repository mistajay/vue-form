import Vue from 'vue'
import { isBoolean, isEmpty, isEqual, merge, omit } from 'lodash'
import { Form, Button } from 'element-ui'
import CONSTANTS from '../../constants'
import { VueFormStoreParams } from '../../store'
import FormItem from '../ConnectedFormItem'
import Notification from '../Notification'
import props, { BUTTONS_POSITION } from './props'
import styles from './styles'

export default {
  props,

  beforeMount() {
    this.store = new Vue(VueFormStoreParams)

    this.store.setInitialValues(this.initialValues)
    this.store.setHandleModelChange(this.handleModelChange)
  },

  watch: {
    initialValues(initialValues, prevInitialValues) {
      if (!isEqual(initialValues, prevInitialValues)) {
        this.store.reinitializeValues(initialValues)
        this.handleModelChange(this.store.state)
      }
    },
  },

  computed: {
    isSubmitButtonDisabled() {
      return this.store.isDisabled || !this.store.isValid
    },

    submitButtonType() {
      return this.save ? 'danger' : 'primary'
    },

    buttons() {
      return {
        reset: isBoolean(this.cancel) ? 'Cancel' : this.cancel,
        save: isBoolean(this.save) ? 'Save' : this.save,
        submit: isBoolean(this.submit) ? 'Submit' : this.submit,
      }
    },

    buttonsStyles() {
      const overridingStyles = {
        [BUTTONS_POSITION.CENTER]: styles.buttons_center,
        [BUTTONS_POSITION.END]: styles.buttons_end,
      }

      return [styles.buttons, overridingStyles[this.buttonsPosition]]
    },
  },

  methods: {
    // Should be called once
    [CONSTANTS.SECRET_VUE_FORM_METHOD](name, initialValue, validators) {
      return this.store.registerFormControl(name, initialValue, validators)
    },

    handleFormDisabled(errors) {
      this.handleDisabled(errors || this.store.allErrors)
    },

    nativeOnSubmit(event) {
      event.preventDefault()

      // Just don't do anything — some form process in progress
      if (this.store.form.submitting) {
        return false
      }

      const isSubmitButtonClick = event.type === 'click'

      this.store.manageTouchedFieldsState()

      // Form Level Sync Validate
      if (this.validate) {
        const syncErrors = this.validate(this.store.state)

        if (!isEmpty(syncErrors)) {
          this.store.addFormSyncErrors(syncErrors)

          return this.handleFormDisabled(syncErrors)
        }
      }

      if (!this.store.isValid && isSubmitButtonClick) {
        return this.handleFormDisabled()
      }

      const messages = this.messages || {}

      const off = this.store.manageSubmittingState()
      const submitForm = () =>
        Promise.resolve(
          this.handleSubmit(
            merge({}, omit(this.initialValues, this.store.removedFields), this.store.state)
          )
        )

      const submitPromise = this.store.form.validating
        ? Promise.all(Object.values(this.store.asyncValidations)).then(submitForm)
        : submitForm()

      // Just subscribe to promise, do not catch errors
      submitPromise
        .then(
          () => Notification.success(messages.success),
          () => {
            Notification.error(messages.error)
            this.handleFormDisabled()
          }
        )
        .then(off)

      return submitPromise
    },

    nativeOnReset(event) {
      event.preventDefault()

      this.store.resetValues()

      if (this.handleCancel) {
        this.handleCancel(this.initialValues)
      }
    },

    renderPlainButtons() {
      return (
        <div style={this.buttonsStyles}>
          {this.cancel && (
            <Button nativeType="reset" disabled={this.store.isDisabled}>
              {this.buttons.reset}
            </Button>
          )}
          {this.save && (
            <Button nativeType="submit" type="primary" disabled={this.store.isDisabled}>
              {this.buttons.save}
            </Button>
          )}
          {this.submit && (
            <Button
              class={[
                `el-button--${this.submitButtonType}`,
                {
                  'is-disabled': this.isSubmitButtonDisabled,
                },
              ]}
              type={this.submitButtonType}
              nativeType={!this.save ? 'submit' : undefined}
              on-click={this.nativeOnSubmit}>
              {this.buttons.submit}
            </Button>
          )}
        </div>
      )
    },

    renderButtons() {
      if (this.buttonsPosition === BUTTONS_POSITION.LABEL) {
        return <FormItem>{this.renderPlainButtons()}</FormItem>
      }

      return this.renderPlainButtons()
    },
  },

  render() {
    return (
      <Form
        novalidate
        label-width={this.labelWidth}
        label-suffix={this.labelSuffix}
        label-position={this.labelPosition}
        nativeOnSubmit={this.nativeOnSubmit}
        nativeOnReset={this.nativeOnReset}>
        {this.$slots.default}
        {this.renderButtons()}
      </Form>
    )
  },
}
