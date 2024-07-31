
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      min: '',
      sec: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, min, sec } = this.state;

    if (text.trim() && min.trim() && sec.trim()) {
      const newTask = {
        text,
        min: parseInt(min, 10),
        sec: parseInt(sec, 10),
        id: Date.now(),
        completed: false,
        createdAt: new Date()
      };
      
      this.props.addTask(newTask);
      this.setState({ text: '', min: '', sec: '' });
    } 
  };

  render() {
    const { text, min, sec } = this.state;

    return (
      <form className="new-todo-form" onSubmit={this.handleSubmit}>
        <input
          className="new-todo"
          name="text"
          placeholder="Task"
          value={text}
          onChange={this.handleChange}
          required
          autoFocus
        />
        <input
          className="new-todo-form__timer"
          name="min"
          type="number" 
          placeholder="Min"
          value={min}
          onChange={this.handleChange}
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
          onChange={this.handleChange}
          required
          min="0" 
          max="59" 
          step="1" 
        />
        <button type="submit" style={{ display: 'none' }}></button>
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default NewTaskForm;
