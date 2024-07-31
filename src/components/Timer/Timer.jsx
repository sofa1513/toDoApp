

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  interval = null; 

  componentDidMount() {
    this.startTimer(); 
  }

  componentDidUpdate(prevProps) {
    if (this.props.completed !== prevProps.completed) {
      if (this.props.completed) {
        this.clearTimer(); 
      } else {
        this.startTimer(); 
      }
    }
  }

  componentWillUnmount() {
    this.clearTimer(); 
  }

  clearTimer = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  };

  startTimer = () => {
    this.clearTimer(); 
    this.interval = setInterval(() => {
      const { min, sec, onUpdate } = this.props;
      if (sec > 0) {
        onUpdate(min, sec - 1);
      } else if (min > 0) {
        onUpdate(min - 1, 59);
      } else {
        this.clearTimer(); 
      }
    }, 1000);
  };

  pauseTimer = () => {
    this.clearTimer(); 
  };

  render() {
    const { min, sec } = this.props;
    return (
      <span className="timer">
        <button className="icon icon-play" onClick={this.startTimer}></button>
        <button className="icon icon-pause" onClick={this.pauseTimer}></button>
        {min}:{sec < 10 ? `0${sec}` : sec}
      </span>
    );
  }
}

Timer.propTypes = {
  min: PropTypes.number.isRequired,
  sec: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired, 
};

export default Timer;
