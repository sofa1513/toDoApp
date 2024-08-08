
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import Timer from '../Timer/Timer';
import './Task.css';

const Task = ({
  task,
  toggleComplete,
  removeTask,
  startEditing,
  updateTask,
  cancelEditing,
  editingTaskId,
  updateTaskTime,
}) => {
  const [editText, setEditText] = useState(task.text);

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      updateTask(task.id, editText);
    } else {
      cancelEditing();
    }
  };

  const handleCancel = () => {
    setEditText(task.text);
    cancelEditing();
  };

  const handleTimerUpdate = (min, sec) => {
    updateTaskTime(task.id, min, sec);
  };

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
              onUpdate={handleTimerUpdate}
              completed={task.completed}
            />
          </span>
          <span className="description">
            created {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
          </span>
        </label>
        <button className="icon icon-edit" onClick={() => startEditing(task.id, task.text)}></button>
        <button className="icon icon-destroy" onClick={() => removeTask(task.id)}></button>
      </div>
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="edit"
            value={editText}
            onChange={handleChange}
            autoFocus
          />
          <button type="button" onClick={handleCancel}></button>
        </form>
      )}
    </li>
  );
};

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
