
import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ min, sec, onUpdate, completed }) => {
  const intervalRef = useRef(null);

  // Функция для очистки таймера
  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Функция для запуска таймера
  const startTimer = useCallback(() => {
    clearTimer(); 
    intervalRef.current = setInterval(() => {
      if (sec > 0) {
        onUpdate(min, sec - 1);
      } else if (min > 0) {
        onUpdate(min - 1, 59);
      } else {
        clearTimer(); // Исправлено: удален this.
      }
    }, 1000);
  }, [min, sec, onUpdate]);

  // Эффект, который запускает и останавливает таймер
  useEffect(() => {
    if (!completed) {
      startTimer();
    }
    return () => clearTimer();
  }, [completed, startTimer]);

  // Функция для приостановки таймера
  const pauseTimer = () => {
    clearTimer(); 
  };

  return (
    <span className="timer">
      <button className="icon icon-play" onClick={startTimer}></button>
      <button className="icon icon-pause" onClick={pauseTimer}></button>
      {min}:{sec < 10 ? `0${sec}` : sec}
    </span>
  );
};

Timer.propTypes = {
  min: PropTypes.number.isRequired,
  sec: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Timer;
