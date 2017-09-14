import React, { Component } from 'react'
import { Form, Text } from 'react-form'

export default class MyForm extends Component {

  handleSubmit(values) {
    const WL = values.workLength
    const BL = values.breakLength
    this.props.handleSubmit(WL, BL)
  }

  render() {
    return (
      <div>
        <h3>Set pomodoro lengths</h3>
        <Form
          onSubmit={(values) => this.handleSubmit(values)}
        >
        {({submitForm}) => {
        return (
          <form onSubmit={submitForm}>
            <Text field='workLength' placeholder='Enter work length' />
            <Text field='breakLength' placeholder='Enter break length' />
            <button type='submit'>Submit</button>
          </form>
        )
        }}
        </Form>
      </div>
    )
  }

}
