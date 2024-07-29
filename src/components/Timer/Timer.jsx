

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: props.min,
      sec: props.sec,
      isRunning: false,
    };
    this.interval = null;
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startTimer = () => {
    if (this.interval) return;
    this.setState({ isRunning: true });
    this.interval = setInterval(() => {
      this.setState(({ min, sec }) => {
        if (sec > 0) {
          return { sec: sec - 1 };
        }
        if (min > 0) {
          return { min: min - 1, sec: 59 };
        }
        clearInterval(this.interval);
        return { isRunning: false };
      });
    }, 1000);
  };

  pauseTimer = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
      this.setState({ isRunning: false });
    }
  };

  render() {
    const { min, sec, isRunning } = this.state;
    return (
      <span className="timer">
        <button className="icon icon-play" onClick={this.startTimer} disabled={isRunning}></button>
        <button className="icon icon-pause" onClick={this.pauseTimer} disabled={!isRunning}></button>
        {min}:{sec < 10 ? `0${sec}` : sec}
      </span>
    );
  }
}

Timer.propTypes = {
  min: PropTypes.number.isRequired,
  sec: PropTypes.number.isRequired,
};

export default Timer;
