import noop from 'lodash/noop'

export const BUTTONS_POSITION = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
  LABEL: 'label',
}

const formProps = {
  reset: [String, Boolean],
  save: [String, Boolean],
  submit: [String, Boolean],

  labelWidth: String,
  labelSuffix: String,
  labelPosition: String,

  buttonsPosition: {
    type: String,
    default: () => 'start',
    validator: value => Object.values(BUTTONS_POSITION).includes(value),
  },

  initialValues: {
    type: Object,
    default: () => ({}),
  },

  messages: Object,

  handleSubmit: {
    type: Function,
    default: noop,
  },
  handleModelChange: Function,
  handleDisabled: {
    type: Function,
    default: noop,
  },
  handleReset: Function,

  validate: Function,
  asyncValidate: Function,
  asyncBlurFields: Array,
}

export default formProps