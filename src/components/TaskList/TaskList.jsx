
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import './TaskList.css';

class TaskList extends Component {
  render() {
    const { tasks, toggleComplete, removeTask, startEditing, editingTaskId, updateTask, cancelEditing } = this.props;

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
              updateTask={updateTask}
              cancelEditing={cancelEditing}
              editingTaskId={editingTaskId}
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
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  editingTaskId: PropTypes.number
};

TaskList.defaultProps = {
  tasks: []
};

export default TaskList;
 
