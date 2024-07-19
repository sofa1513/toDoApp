

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.editingTaskId !== null && this.props.editingTaskId !== prevProps.editingTaskId) {
      this.setState({ text: this.props.editingText });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { addTask } = this.props;

    if (!text.trim()) return;

    
    {
      addTask({
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date()
      });
    }
    this.setState({ text: '' });
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="new-task"
          className="new-todo"
          placeholder="What needs to be done?"
          value={text}
          onChange={this.handleChange}
          autoFocus
        />
       
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired
};

export default NewTaskForm;