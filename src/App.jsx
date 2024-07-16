/* import React, { useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // массив задач
  const [taskFilter, setTaskFilter] = useState('All');  // фильтр
  const [editingTaskId, setEditingTaskId] = useState(null); //ид редакт задачи
  const [editingText, setEditingText] = useState(''); // текст ред зад

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

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
    setEditingTaskId(null);
    setEditingText('');
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const startEditing = (id, text) => {
    setEditingTaskId(id);
    setEditingText(text);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingText('');
  };

  const filteredTasks = tasks.filter(task => {
    if (taskFilter === 'Active') {
      return !task.completed;
    }
    if (taskFilter === 'Completed') {
      return task.completed;
    }
    return true;
  });

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm
          addTask={addTask}
          editingTaskId={editingTaskId}
          editingText={editingText}
          updateTask={updateTask}
          cancelEditing={cancelEditing}
        />
      </header>
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
        startEditing={startEditing}
      />
      <Footer
        tasks={tasks}
        clearCompleted={clearCompleted}
        taskFilter={taskFilter}
        setTaskFilter={setTaskFilter}
      />
    </section>
  );
}

export default App; */








import React, { Component } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
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

  render() {
    const { tasks, taskFilter, editingTaskId, editingText } = this.state;

    const filteredTasks = tasks.filter(task => {
      if (taskFilter === 'Active') {
        return !task.completed;
      }
      if (taskFilter === 'Completed') {
        return task.completed;
      }
      return true;
    });

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
        />
        <Footer
          tasks={tasks}
          clearCompleted={this.clearCompleted}
          taskFilter={taskFilter}
          setTaskFilter={this.setTaskFilter}
        />
      </section>
    );
  }
}

export default App;