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
        <h3>Set pomodoro lengths in minutes</h3>
        <Form
          onSubmit={(values) => this.handleSubmit(values)}
          
          validate={values => {
            const { workLength, breakLength } = values
            return {
              workLength: workLength <= 0 || workLength >= 60 ? 'Please enter a number between 1 and 59' : null,
              breakLength: breakLength <= 0 || breakLength >= 60 ? 'Please enter a number between 1 and 59' : null
            }
          }}
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
