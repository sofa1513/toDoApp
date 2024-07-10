import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <section class="main">
      <ul class="todo-list">
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

export default TodoList;