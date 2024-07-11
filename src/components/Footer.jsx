
/* import React from 'react';
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

export default Footer; */

import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from './TasksFilter';

function Footer({ tasks = [], clearCompleted, taskFilter, setTaskFilter }) {
  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{remainingTasks}</strong> {remainingTasks === 1 ? 'item' : 'items'} left
      </span>
      <TasksFilter
        taskFilter={taskFilter}
        setTaskFilter={setTaskFilter}
      />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool,
      createdAt: PropTypes.instanceOf(Date)
    })
  ).isRequired,
  clearCompleted: PropTypes.func.isRequired,
  taskFilter: PropTypes.string.isRequired,
  setTaskFilter: PropTypes.func.isRequired
};

export default Footer;