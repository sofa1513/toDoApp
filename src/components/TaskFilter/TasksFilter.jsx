
import React from 'react';
import PropTypes from 'prop-types';
import './TaskFilter.css';

const TasksFilter = ({ taskFilter, setTaskFilter }) => {



    return (
      <ul className="filters">
        <li>
        <button
          className={`${taskFilter === 'All' && 'selected' }`}
          onClick={() => setTaskFilter('All')}
        >
            All
          </button>
        </li>
        <li>
          <button
            className={`${taskFilter === 'Active' && 'selected' }`}
            onClick={() => setTaskFilter('Active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={`${taskFilter === 'Completed' && 'selected' }`}
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
