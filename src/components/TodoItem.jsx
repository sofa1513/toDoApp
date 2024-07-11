import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <li class={todo.completed ? 'completed' : ''}>
      <div class="view">
        <input 
          class="toggle" 
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

export default TodoItem;