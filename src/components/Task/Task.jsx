

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import Timer from '../Timer/Timer';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editText: this.props.task.text,
    };
  }

  handleChange = (e) => {
    this.setState({ editText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { task, updateTask, cancelEditing } = this.props;
    const { editText } = this.state;

    if (editText.trim()) {
      updateTask(task.id, editText);
    } else {
      cancelEditing();
    }
  };

  handleCancel = () => {
    const { cancelEditing } = this.props;
    this.setState({ editText: this.props.task.text });
    cancelEditing();
  };

  handleTimerUpdate = (min, sec) => {
    const { updateTaskTime, task } = this.props;
    updateTaskTime(task.id, min, sec);
  };

  render() {
    const { task, toggleComplete, removeTask, editingTaskId } = this.props;
    const { editText } = this.state;
    const isEditing = task.id === editingTaskId;

    return (
      <li className={isEditing ? 'editing' : task.completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <label>
            <span className="title">{task.text}</span>
            <span className="description">
              <Timer
                min={task.min}
                sec={task.sec}
                onUpdate={this.handleTimerUpdate}
                completed={task.completed} 
              />
            </span>
            <span className="description">
              created {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
            </span>
          </label>
          <button className="icon icon-edit" onClick={() => this.props.startEditing(task.id, task.text)}></button>
          <button className="icon icon-destroy" onClick={() => removeTask(task.id)}></button>
        </div>
        {isEditing && (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="edit"
              value={editText}
              onChange={this.handleChange}
              autoFocus
            />
            <button type="button" onClick={this.handleCancel}></button>
          </form>
        )}
      </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    min: PropTypes.number.isRequired,
    sec: PropTypes.number.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  editingTaskId: PropTypes.number,
  updateTaskTime: PropTypes.func.isRequired,
};

export default Task;

