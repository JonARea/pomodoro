import React, { Component } from 'react'
import '../styles/timer.css'
import ding from '../Good-idea-bell.mp3'
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      action: null,
      interval: null,
      timeRemaining: null,
      breakLength: 1000*10,
      workLength: 1000*25
    }
    this.baseState = this.state
  }

  createNotification(type) {
    return type === 'breakStart' ? NotificationManager.success('Take a break') : NotificationManager.info('Get to work')
  }

  playDing() {
    const DING = new Audio(ding)
    DING.play()
  }

  handleStart() {
    const START = Date.now()
    const ACTION = this.state.action === 'break' ? 'break' : 'work'

    const TIME_REMAINING = this.state.timeRemaining || this.state.workLength
    const FINISH = START + TIME_REMAINING

    document.getElementById('message').innerHTML = ACTION === 'break' ? 'Take a break. You earned it' : 'Keep working!'


    let timeInterval = setInterval( () => {
      const NEW_TIME_REMAINING = FINISH - Date.now()

      const time = this.makeTimeObject(NEW_TIME_REMAINING)


      document.getElementById('clock').innerHTML = time.minutes  + ':' + time.seconds
      this.setState({interval: timeInterval, timeRemaining: time.total})

      if (time.total <= 0 ) {
        clearInterval(timeInterval)
        this.playDing()


        if (ACTION === 'break') {
          this.createNotification('workStart')
          this.setState({
            action: 'work',
            timeRemaining: this.state.workLength
          })
        } else {
          this.createNotification('breakStart')
          this.setState({
            action: 'break',
            timeRemaining: this.state.breakLength
          })
        }
        this.handleStart()
      }

    }, 1000)
  }


  handleStop() {
    clearInterval(this.state.interval)
    document.getElementById('message').innerHTML = 'Stopped the Clock'
  }

  makeTimeObject(time) {
    const seconds = Math.floor( (time/1000)%60)
    const secondsPadded = seconds <= 0 ? "00" : seconds < 10 ? "0" + seconds : seconds
    const minutes = Math.floor((time/1000/60)%60)
    const minutesPadded = minutes <= 0 ? "00" : minutes < 10 ? "0" + minutes : minutes
    return {
      'total': time,
      'seconds': secondsPadded,
      'minutes': minutesPadded
    }
  }

  handleReset() {
    clearInterval(this.state.interval)
    document.getElementById('clock').innerHTML = ""
    document.getElementById('message').innerHTML = "Let's get to work"
    this.setState(this.baseState)
  }


  render() {
    return (

      <div>
        <NotificationContainer />
        <h1 id='message'>Let's get to work</h1>
        <div id='clock'>

        </div>
        <br />
        <button onClick={() => {this.handleStart()}} className='btn btn-success'>Start</button>
        <button onClick={() => {this.handleStop()}} className='btn btn-danger'>Stop</button>
        <button onClick={() => {this.handleReset()}} className='btn btn-default'>Reset</button>
      </div>
    )
  }
}
