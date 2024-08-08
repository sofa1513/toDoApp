import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const NewTaskForm = ({ addTask }) => {
  const [text, setText] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'text') {
      setText(value);
    } else if (name === 'min') {
      setMin(value);
    } else if (name === 'sec') {
      setSec(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() && min.trim() && sec.trim()) {
      const newTask = {
        text,
        min: parseInt(min, 10),
        sec: parseInt(sec, 10),
        id: Date.now(),
        completed: false,
        createdAt: new Date()
      };
      
      addTask(newTask);
      setText('');
      setMin('');
      setSec('');
    } 
  };

  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <input
        className="new-todo"
        name="text"
        placeholder="Task"
        value={text}
        onChange={handleChange}
        required
        autoFocus
      />
      <input
        className="new-todo-form__timer"
        name="min"
        type="number" 
        placeholder="Min"
        value={min}
        onChange={handleChange}
        required
        min="0" 
        step="1" 
      />
      <input
        className="new-todo-form__timer"
        name="sec"
        type="number" 
        placeholder="Sec"
        value={sec}
        onChange={handleChange}
        required
        min="0" 
        max="59" 
        step="1" 
      />
      <button type="submit" style={{ display: 'none' }}></button>
    </form>
  );
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default NewTaskForm;
