/* import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input 
          className="toggle" 
          type="checkbox" 
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)} 
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => removeTodo(todo.id)}></button>
      </div>
    </li>
  );
}

export default TodoItem; */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    const { todo, toggleComplete, removeTodo } = this.props;

    return (
      <li className={todo.completed ? 'completed' : ''}>
        <div className="view">
          <input 
            className="toggle" 
            type="checkbox" 
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)} 
          />
          <label>{todo.text}</label>
          <button className="destroy" onClick={() => removeTodo(todo.id)}></button>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

TodoItem.defaultProps = {
  todo: {
    id: 0,
    text: '',
    completed: false,
    createdAt: new Date()
  }
};

export default TodoItem;