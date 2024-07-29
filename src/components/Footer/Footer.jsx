
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TaskFilter/TasksFilter';
import './Footer.css'

class Footer extends Component {
  render() {
    const { remainingTasksCount, clearCompleted, taskFilter, setTaskFilter } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{remainingTasksCount}</strong> {remainingTasksCount === 1 ? 'item' : 'items'} left
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
}

Footer.propTypes = {
  remainingTasksCount: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  taskFilter: PropTypes.string.isRequired,
  setTaskFilter: PropTypes.func.isRequired
};

export default Footer;
