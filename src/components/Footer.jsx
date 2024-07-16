
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TasksFilter from './TasksFilter';

class Footer extends Component {
  render() {
    const { tasks, clearCompleted, taskFilter, setTaskFilter } = this.props;
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