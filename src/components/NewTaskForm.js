/* import React, { useState } from 'react';

function NewTaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({
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

export default NewTaskForm; */

import React, { useState } from 'react';

function NewTaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({
      id: Date.now(),
      text,
      completed: false
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
    </form>
  );
}

export default NewTaskForm;