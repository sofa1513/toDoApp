/* 
import React from 'react';

function TasksFilter({ taskFilter, onShowAllTask, onShowActiveTask, onShowCompletedTask }) {
  return (
    <ul className="filters">
      <li>
        <button
          className={taskFilter === 'All' ? 'selected' : undefined}
          onClick={onShowAllTask}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={taskFilter === 'Active' ? 'selected' : undefined}
          onClick={onShowActiveTask}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={taskFilter === 'Completed' ? 'selected' : undefined}
          onClick={onShowCompletedTask}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TasksFilter; */



import React from 'react';
import PropTypes from 'prop-types';

function TasksFilter({
  taskFilter = 'All',
  setTaskFilter = () => {}
}) {
  return (
    <ul className="filters">
      <li>
        <button
          className={taskFilter === 'All' ? 'selected' : undefined}
          onClick={() => setTaskFilter('All')}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={taskFilter === 'Active' ? 'selected' : undefined}
          onClick={() => setTaskFilter('Active')}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={taskFilter === 'Completed' ? 'selected' : undefined}
          onClick={() => setTaskFilter('Completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.propTypes = {
  taskFilter: PropTypes.string.isRequired,
  setTaskFilter: PropTypes.func.isRequired
};

export default TasksFilter;