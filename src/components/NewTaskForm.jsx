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
/* 
export default NewTaskForm; */

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
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
    </form>
  );
}

export default NewTaskForm; */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function NewTaskForm({
  addTask,
  editingTaskId = null,
  editingText = '',
  updateTask,
  cancelEditing
}) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editingTaskId !== null) {
      setText(editingText);
    }
  }, [editingTaskId, editingText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editingTaskId !== null) {
      updateTask(editingTaskId, text);
    } else {
      addTask({
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date()
      });
    }
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
      {editingTaskId !== null && (
        <button type="button" onClick={cancelEditing}>Cancel</button>
      )}
    </form>
  );
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  editingTaskId: PropTypes.number,
  editingText: PropTypes.string,
  updateTask: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired
};

export default NewTaskForm;