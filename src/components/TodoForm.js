import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo({
      id: Date.now(),
      text,
      completed: false
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        class="new-todo" 
        placeholder="What needs to be done?" 
        value={text}
        onChange={(e) => setText(e.target.value)} 
        autoFocus 
      />
    </form>
  );
}

export default TodoForm;