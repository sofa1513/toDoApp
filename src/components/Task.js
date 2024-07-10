
import React from 'react';

function Task({ task, toggleComplete, removeTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <label>{task.text}</label>
        <button className="destroy" onClick={() => removeTask(task.id)}></button>
      </div>
    </li>
  );
}

export default Task;