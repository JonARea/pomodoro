import React, { Component } from 'react';
import tomato from './tomato.jpeg';
import Timer from './components/timer.js'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={tomato} className="App-logo" alt="pomodoro" />
          <h2>My Pomodoro</h2>
        </div>
        <Timer />
      </div>
    );
  }
}

export default App;
