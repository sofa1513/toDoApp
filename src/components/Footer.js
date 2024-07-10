import React from 'react';
import TasksFilter from './TasksFilter';

function Footer({ tasks, clearCompleted }) {
  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <footer class="footer">
      <span class="todo-count">
        <strong>{remainingTasks}</strong> item{remainingTasks !== 1 ? 's' : ''} left
      </span>
      <TasksFilter />
      <button class="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;