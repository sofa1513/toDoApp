
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TaskFilter.css';

class TasksFilter extends Component {
  render() {
    const { taskFilter, setTaskFilter } = this.props;

    return (
      <ul className="filters">
        <li>
          <button
            className={taskFilter === 'All' ? 'selected' : ''}
            onClick={() => setTaskFilter('All')}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={taskFilter === 'Active' ? 'selected' : ''}
            onClick={() => setTaskFilter('Active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={taskFilter === 'Completed' ? 'selected' : ''}
            onClick={() => setTaskFilter('Completed')}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

TasksFilter.propTypes = {
  taskFilter: PropTypes.string.isRequired,
  setTaskFilter: PropTypes.func.isRequired
};

TasksFilter.defaultProps = {
  taskFilter: 'All',
  setTaskFilter: () => {}
};

export default TasksFilter;
