
import React from 'react';
import TasksFilter from './TasksFilter';

function Footer({ tasks, clearCompleted, taskFilter, showAllTasks, showActiveTasks, showCompletedTasks }) {
  const completedCount = tasks.filter(task => task.completed).length;
  const activeCount = tasks.length - completedCount;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> item{activeCount !== 1 && 's'} left
      </span>
      <TasksFilter 
        taskFilter={taskFilter}
        onShowAllTask={showAllTasks}
        onShowActiveTask={showActiveTasks}
        onShowCompletedTask={showCompletedTasks}
      />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;