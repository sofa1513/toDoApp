import React, { Component } from 'react';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskFilter: 'All',
      editingTaskId: null,
      editingText: ''
    };
  }

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task]
    }));
  };

  toggleComplete = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  removeTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }));
  };

  updateTask = (id, newText) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      ),
     editingTaskId: null,
      editingText: ''
    }));
  };

  clearCompleted = () => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(task => !task.completed)
    }));
  };

  startEditing = (id, text) => {
    this.setState({
      editingTaskId: id,
      editingText: text
    });
  };

  cancelEditing = () => {
    this.setState({
      editingTaskId: null,
      editingText: ''
    });
  };

  setTaskFilter = (filter) => {
    this.setState({ taskFilter: filter });
  };

  getFilteredTasks = () => {
    const { tasks, taskFilter } = this.state;
    if (taskFilter === 'Active') {
      return tasks.filter(task => !task.completed);
    }
    if (taskFilter === 'Completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  };

  getRemainingTasksCount = () => {
    return this.state.tasks.filter(task => !task.completed).length;
  };

  /* render() {
    const { tasks, taskFilter, editingTaskId, editingText } = this.state;
    const filteredTasks = this.getFilteredTasks();
    const remainingTasksCount = this.getRemainingTasksCount();

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm
            addTask={this.addTask}
            editingTaskId={editingTaskId}
            editingText={editingText}
            updateTask={this.updateTask}
            cancelEditing={this.cancelEditing}
          />
        </header>
        <TaskList
          tasks={filteredTasks}
          toggleComplete={this.toggleComplete}
          removeTask={this.removeTask}
          startEditing={this.startEditing}
          updateTask={this.updateTask}
          cancelEditing={this.cancelEditing}
          editingTaskId={editingTaskId}
        />
        <Footer
          remainingTasksCount={remainingTasksCount}
          clearCompleted={this.clearCompleted}
          taskFilter={taskFilter}
          setTaskFilter={this.setTaskFilter}
        />
      </section>
    );
  } */
    render() {
      const { tasks, taskFilter, editingTaskId, editingText } = this.state;
      const filteredTasks = this.getFilteredTasks();
      const remainingTasksCount = this.getRemainingTasksCount();
    
      return (
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm
              addTask={this.addTask}
              updateTask={this.updateTask}
              cancelEditing={this.cancelEditing}
            />
          </header>
          <TaskList
            tasks={filteredTasks}
            toggleComplete={this.toggleComplete}
            removeTask={this.removeTask}
            startEditing={this.startEditing}
            updateTask={this.updateTask}
            cancelEditing={this.cancelEditing}
            editingTaskId={editingTaskId}
          />
          <Footer
            remainingTasksCount={remainingTasksCount}
            clearCompleted={this.clearCompleted}
            taskFilter={taskFilter}
            setTaskFilter={this.setTaskFilter}
          />
        </section>
      );
    }
    
}

export default App;
