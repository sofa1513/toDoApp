
import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const TaskList = ({
  tasks = [], 
  toggleComplete, 
  removeTask, 
  startEditing, 
  editingTaskId,  
  updateTask, 
  cancelEditing, 
  updateTaskTime 
})  => {

    return (
      <section className="main">
        <ul className="todo-list">
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              removeTask={removeTask}
              startEditing={startEditing}
              updateTask={updateTask}
              cancelEditing={cancelEditing}
              editingTaskId={editingTaskId}
              updateTaskTime={updateTaskTime}
            />
          ))}
        </ul>
      </section>
    );
  }


TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
      min: PropTypes.number.isRequired,
      sec: PropTypes.number.isRequired
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  editingTaskId: PropTypes.number,
  updateTaskTime: PropTypes.func.isRequired,
};


export default TaskList;
