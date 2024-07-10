
import React, { useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskFilter, setTaskFilter] = useState('All');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const showAllTasks = () => setTaskFilter('All');
  const showActiveTasks = () => setTaskFilter('Active');
  const showCompletedTasks = () => setTaskFilter('Completed');

  const filteredTasks = tasks.filter(task => {
    if (taskFilter === 'Active') return !task.completed;
    if (taskFilter === 'Completed') return task.completed;
    return true; // For 'All'
  });

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} removeTask={removeTask} />
      <Footer 
        tasks={tasks} 
        clearCompleted={clearCompleted} 
        taskFilter={taskFilter}
        showAllTasks={showAllTasks}
        showActiveTasks={showActiveTasks}
        showCompletedTasks={showCompletedTasks}
      />
    </section>
  );
}

export default App;