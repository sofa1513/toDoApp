/* 
import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleComplete, removeTask }) {
  return (
    <section className="main">
      <ul className="todo-list">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            removeTask={removeTask}
          />
        ))}
      </ul>
    </section>
  );
}
/* 
export default TaskList; */

/* import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

function Task({ task, toggleComplete, removeTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <label>{task.text}</label>
        <span className="created-at">
          {`created ${formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}`}
        </span>
        <button className="destroy" onClick={() => removeTask(task.id)}></button>
      </div>
    </li>
  );
}

Task.defaultProps = {
  task: {
    id: 0,
    text: '',
    completed: false,
    createdAt: new Date()
  },
  toggleComplete: () => {},
  removeTask: () => {}
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.instanceOf(Date)
  }),
  toggleComplete: PropTypes.func,
  removeTask: PropTypes.func
};

export default Task; */


import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

function TaskList({ tasks = [], toggleComplete, removeTask, startEditing }) {
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

export default TaskList;