import React, { Component } from 'react'
import tomato from './tomato.jpeg'
import Timer from './components/timer.js'
import MyForm from './components/form.js'
import './styles/App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formSubmitted: false,
      workLength: 0,
      breakLength: 0
    }
    this.baseState = this.state
  }

  handleFormSubmit (workLength, breakLength) {
    this.setState({
      formSubmitted: true,
      workLength: workLength,
      breakLength: breakLength
    })
  }

  reset() {
    this.setState(this.baseState)
  }

  renderComponents() {
    if (this.state.formSubmitted) {
      return (
        <Timer workLength={this.state.workLength} breakLength={this.state.breakLength} reset={this.reset.bind(this)} />
      )
    } else {
      return (
        <MyForm handleSubmit={this.handleFormSubmit.bind(this)}/>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={tomato} className="App-logo" alt="pomodoro" />
          <h2>My Pomodoro</h2>
        </div>
        <div className='component-container'>
          {this.renderComponents()}
        </div>

      </div>
    );
  }
}

export default App;
