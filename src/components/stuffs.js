import React, { Component } from 'react'
import {Form, Text} from 'react-form'

export default class Stuffs extends Component {
  constructor() {
    super()
    this.theStuff = process.env.theStuff || null
    this.renderStuff = this.renderStuff.bind(this)
  }

  renderStuff(key, secret) {
    if (key === process.env.KEY && secret === process.env.SECRET) {
      const THESTUFF = this.theStuff.map((stuff) => {
        return <li>{stuff[0]} + ': ' + {stuff[1]}</li>
      })
      return (
        <ul className='list-group'>
          "Here's the stuff"
          {THESTUFF}
        </ul>
      )
    } else {
      return <div>None shall pass</div>
    }

  }

  renderForm() {
    return (
      <div>
        <h3>"What's the flight ratio of laden sparrow?"</h3>
        <Form
          onSubmit={(values) => {
            const KEY = values.key
            const SECRET = values.secret
            this.renderStuff(KEY, SECRET)
          }}

          validate={values => {
            const { KEY, SECRET } = values
            return {
              key: KEY ? null : 'Enter your key',
              secret: SECRET ? null : 'Enter the secret'
            }
          }}
        >
        {({submitForm}) => {
        return (
          <form onSubmit={submitForm}>
            <Text field='key' placeholder='' />
            <Text field='secret' placeholder='' />
            <button type='submit'>Submit</button>
          </form>
        )
        }}
        </Form>
      </div>
    )
  }


  render() {
    return (
      this.renderForm
    )
  }
}
