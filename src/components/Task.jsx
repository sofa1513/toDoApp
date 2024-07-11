
import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

function Task({ task, toggleComplete, removeTask, startEditing }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <label>
          <span className="description">{task.text}</span>
          <span className="created">{`created ${formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}`}</span>
        </label>
        <button className="icon icon-edit" onClick={() => startEditing(task.id, task.text)}></button>
        <button className="icon icon-destroy" onClick={() => removeTask(task.id)}></button>
      </div>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.instanceOf(Date)
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired
};

export default Task;