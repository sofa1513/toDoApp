

import React, { useState } from 'react';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskFilter, setTaskFilter] = useState('All');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
    setEditingTaskId(null);
    setEditingText('');
  };

  const updateTimer = (id, min, sec) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, min, sec } : task
      )
    );
  };

  const updateTaskTime = (taskId, min, sec) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, min, sec } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const startEditing = (id, text) => {
    setEditingTaskId(id);
    setEditingText(text);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingText('');
  };

  const getFilteredTasks = () => {
    if (taskFilter === 'Active') {
      return tasks.filter((task) => !task.completed);
    }
    if (taskFilter === 'Completed') {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  };

  const getRemainingTasksCount = () => {
    return tasks.filter((task) => !task.completed).length;
  };

  const filteredTasks = getFilteredTasks();
  const remainingTasksCount = getRemainingTasksCount();

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
        startEditing={startEditing}
        updateTask={updateTask}
        cancelEditing={cancelEditing}
        editingTaskId={editingTaskId}
        updateTimer={updateTimer}
        updateTaskTime={updateTaskTime}
        editingText={editingText}
      />
      <Footer
        remainingTasksCount={remainingTasksCount}
        clearCompleted={clearCompleted}
        taskFilter={taskFilter}
        setTaskFilter={setTaskFilter}
      />
    </section>
  );
};

export default App;
