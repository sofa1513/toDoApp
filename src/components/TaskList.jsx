

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class TaskList extends Component {
  render() {
    const { tasks, toggleComplete, removeTask, startEditing } = this.props;

    return (
      <section className="main">
        <ul className="todo-list">
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              removeTask={removeTask}
              startEditing={startEditing}
            />
          ))}
        </ul>
      </section>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool,
      createdAt: PropTypes.instanceOf(Date)
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired
};

TaskList.defaultProps = {
  tasks: []
};

export default TaskList;
