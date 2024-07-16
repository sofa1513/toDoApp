/* import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            removeTodo={removeTodo} 
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList; */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { todos, toggleComplete, removeTodo } = this.props;

    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              toggleComplete={toggleComplete} 
              removeTodo={removeTodo} 
            />
          ))}
        </ul>
      </section>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

TodoList.defaultProps = {
  todos: []
};

export default TodoList;