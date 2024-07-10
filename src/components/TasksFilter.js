
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


export default TasksFilter;