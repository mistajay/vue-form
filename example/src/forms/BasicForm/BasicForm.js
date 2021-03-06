import Form, {
  Input,
  Checkbox,
  CheckboxGroup,
  InputNumber,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Switch,
  TimePicker,
  DatePicker,
  useFormState,
} from '@detools/vue-form'

export default {
  data() {
    return {
      formValues: {},
      heroesOptions: [
        'The Wasp',
        'Ant-Man',
        'Ghost',
        'Hulk',
        'Thor',
        'Star-lord',
        'Doctor Strange',
        'Ebony Maw',
      ],
      companiesOptions: ['Apple', 'Google', 'Amazon', 'Microsoft'],
      browsersOptions: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Opera'],
    }
  },

  methods: {
    handleSubmit(values) {
      this.formValues = values
    },

    normalizeUserFields({ value, name, state }) {
      const [fieldName, propName] = name.split('.')

      return {
        name: fieldName,
        value: {
          ...state[fieldName],
          [propName]: value,
        },
      }
    },
  },

  render() {
    return (
      <div>
        <h1>Basic Form</h1>
        <div class="wrapper">
          <div class="form">
            <Form cancel submit="Save" labelPosition="top" handleSubmit={this.handleSubmit}>
              <Input
                formItem
                name="user.name"
                label="Username"
                normalize={this.normalizeUserFields}
              />
              <Input
                formItem
                name="user.password"
                type="password"
                label="Password"
                normalize={this.normalizeUserFields}
              />
              <Checkbox formItem name="savePassword">
                Save password on this computer
              </Checkbox>
              <CheckboxGroup
                formItem
                name="companies"
                label="What companies do you prefer?"
                options={this.companiesOptions}
              />
              <InputNumber formItem controls name="age" label="Select your age" value={26} />
              <div>
                <Radio name="word" value="A">
                  A
                </Radio>
                <Radio name="word" value="B">
                  B
                </Radio>
              </div>
              <br />
              <RadioGroup
                formItem
                name="browser"
                label="Which browser do you use?"
                options={this.browsersOptions}
              />
              <Select
                formItem
                name="superhero"
                options={this.heroesOptions}
                label="Select a Superhero"
              />
              <Slider
                formItem
                name="controls"
                label="How many controls in this form?"
                min={0}
                max={10}
              />
              <Switch
                formItem
                name="ligths"
                label="What should we do with lights?"
                activeText="ON"
                inactiveText="OFF"
              />
              <TimePicker formItem name="time" label="Select Time" />
              <DatePicker formItem name="date" label="Select Date" />
            </Form>
          </div>
          <div class="values">
            <strong>Form Values</strong>
            <br />
            <br />
            <div>
              <pre>{JSON.stringify(this.formValues, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
