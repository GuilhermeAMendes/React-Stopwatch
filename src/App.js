import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.timer = null;
    this.goTimer = this.goTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  goTimer() {
    this.timer = setInterval(() => {
      let state = this.state;
      state.time += 0.1;
      this.setState(state);
    }, 100);
  }

  clearTimer() {
    this.timer = clearInterval(this.timer);
    let state = this.state;
    state.time = 0;
    this.setState(state);
    this.timer = null;
  }

  stopTimer() {
    this.timer = clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    return (
      <div className="container">
        <img
          src={require("./assets/cronometro.png")}
          alt="cronometro"
          className="img"
        ></img>
        <a className="timer">{this.state.time.toFixed(1)}</a>
        <div className="btnArea">
          <a className="Btn" onClick={this.goTimer}>
            Go!
          </a>
          <br />
          <a className="Btn" onClick={this.clearTimer}>
            Clear
          </a>
          <br />
          <a className="Btn" onClick={this.stopTimer}>
            Stop
          </a>
          <br />
        </div>
      </div>
    );
  }
}

export default App;
