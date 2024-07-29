

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
    console.log(`Changed: ${name} to ${value}`);
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, min, sec } = this.state;
    console.log('Form Submitted:', { text, min, sec });

    if (text.trim() && min.trim() && sec.trim()) {
      const newTask = {
        text,
        min: parseInt(min, 10),
        sec: parseInt(sec, 10),
        id: Date.now(),
        completed: false,
        createdAt: new Date()
      };
      console.log('New task to add:', newTask);
      this.props.addTask(newTask);
      this.setState({ text: '', min: '', sec: '' });
    } else {
      console.log('Invalid input:', { text, min, sec });
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
          autoFocus
        />
        <input
          className="new-todo-form__timer"
          name="min"
          placeholder="Min"
          value={min}
          onChange={this.handleChange}
        />
        <input
          className="new-todo-form__timer"
          name="sec"
          placeholder="Sec"
          value={sec}
          onChange={this.handleChange}
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
