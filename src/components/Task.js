import React from 'react';

function Task({ task, toggleComplete, removeTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <label>{task.text}</label>
        <button class="destroy" onClick={() => removeTask(task.id)}></button>
      </div>
    </li>
  );
}

export default Task;