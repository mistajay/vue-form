# vue-form

<img align="right" src="twitter_header_photo_1.png" />

Form State Management for VueJS

[![npm version](http://img.shields.io/npm/v/@detools/vue-form.svg?style=flat)](https://npmjs.org/package/@detools/vue-form 'View this project on npm')
[![npm downloads](https://img.shields.io/npm/dm/@detools/vue-form.svg)](https://npmjs.org/package/@detools/vue-form 'View this project on npm')
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Installation

```bash
npm i @detools/vue-form
```

## Usage

```js
import { Button } from 'element-ui'
import Form, { Input } from '@detools/vue-form'

export default {
  data() {
    return {
      formValues: {},
    }
  },

  methods: {
    handleSubmit(values) {
      this.formValues = values
    },
  },

  render() {
    return (
      <div>
        <h1>Basic Form</h1>
        <div class="wrapper">
          <div class="form">
            <Form reset submit="Save" labelPosition="top" handleSubmit={this.handleSubmit}>
              <Input formItem name="username" label="Username" />
            </Form>
          </div>
          <div class="values">
            <strong>Form Values</strong>
            <br />
            <br />
            <div>{JSON.stringify(this.formValues, null, 2)}</div>
          </div>
        </div>
      </div>
    )
  },
}
```

## More Examples

See source in [example/src](/example/src) folder.  
See demo at [https://detools.github.io/vue-form](https://detools.github.io/vue-form)

## Available Connected Components

- [Checkbox](/VueForm/components/ConnectedCheckbox.js)
- [CheckboxGroup](/VueForm/components/ConnectedCheckboxGroup.js)
- [DatePicker](/VueForm/components/ConnectedDatePicker.js)
- [Input](/VueForm/components/ConnectedInput.js)
- [InputNumber](/VueForm/components/ConnectedInputNumber.js)
- [Radio](/VueForm/components/ConnectedRadio.js)
- [RadioGroup](/VueForm/components/ConnectedRadioGroup.js)
- [Select](/VueForm/components/ConnectedSelect.js)
- [Slider](/VueForm/components/ConnectedSlider.js)
- [Switch](/VueForm/components/ConnectedSwitch.js)
- [TimePicker](/VueForm/components/ConnectedTimePicker.js)
- [Upload](/VueForm/components/ConnectedUpload.js)
- [FieldArray](/VueForm/components/ConnectedFieldArray.js)
- [Form](/VueForm/components/Form/Form.vue)

## Changelog

- [2.7.4](/CHANGELOG.md#274)
- [2.7.3](/CHANGELOG.md#273)
- [2.7.2](/CHANGELOG.md#272)
- [2.7.1](/CHANGELOG.md#271)
- [2.7.0](/CHANGELOG.md#270)
- [2.6.1](/CHANGELOG.md#261)
- [2.6.0](/CHANGELOG.md#260)
- [2.5.11](/CHANGELOG.md#2511)
- [2.5.10](/CHANGELOG.md#2510)
- [2.5.9](/CHANGELOG.md#259)
- [2.5.8](/CHANGELOG.md#258)
- [2.5.7](/CHANGELOG.md#257)
- [2.5.6](/CHANGELOG.md#256)
- [2.5.5](/CHANGELOG.md#255)
- [2.5.4](/CHANGELOG.md#254)
- [2.5.3](/CHANGELOG.md#253)
- [2.5.2](/CHANGELOG.md#252)
- [2.5.1](/CHANGELOG.md#251)
- [2.5.0](/CHANGELOG.md#250)
- [2.4.2](/CHANGELOG.md#242)
- [2.4.1](/CHANGELOG.md#241)
- [2.4.0](/CHANGELOG.md#240)
- [2.3.1](/CHANGELOG.md#231)
- [2.3.0](/CHANGELOG.md#230)
- [2.2.0](/CHANGELOG.md#220)
- [2.1.0](/CHANGELOG.md#210)
- [2.0.0](/CHANGELOG.md#200)
- [1.5.0](/CHANGELOG.md#150)
- [1.4.4](/CHANGELOG.md#144)
- [1.4.3](/CHANGELOG.md#143)
- [1.4.2](/CHANGELOG.md#142)
- [1.4.1](/CHANGELOG.md#141)
- [1.4.0](/CHANGELOG.md#140)
