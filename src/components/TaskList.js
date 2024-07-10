
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

export default TaskList;