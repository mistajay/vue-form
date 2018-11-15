import { Radio } from 'element-ui'
import noop from 'lodash/noop'
import resolveRegisterFormComponent from './resolveRegisterFormComponent'

// XXX: Add RadioGroup
export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    value: [String, Number, Boolean],
    disabled: Boolean,
    border: Boolean,
    size: String,

    validate: {
      type: Function,
      default: noop,
    },

    handleFocus: {
      type: Function,
      default: noop,
    },

    handleBlur: {
      type: Function,
      default: noop,
    },

    handleChange: {
      type: Function,
      default: noop,
    },
  },

  data() {
    const $registerFormComponent = resolveRegisterFormComponent(this)

    return $registerFormComponent(this.name, this.value, this.validate)
  },

  destroyed() {
    this.cleanFormValue()
  },

  render() {
    const [value, setValue] = this.useState()

    return (
      <Radio
        class={this.class}
        name={this.name}
        value={value}
        label={this.value}
        disabled={this.disabled}
        border={this.border}
        size={this.size}
        on-input={setValue}
        on-focus={this.handleFocus}
        on-blur={this.handleBlur}
        on-change={this.handleChange}>
        {this.$slots.default}
      </Radio>
    )
  },
}
