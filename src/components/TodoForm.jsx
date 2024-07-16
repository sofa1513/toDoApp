import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { addTodo } = this.props;
    if (!text.trim()) return;
    addTodo({
      id: Date.now(),
      text,
      completed: false
    });
    this.setState({ text: '' });
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          className="new-todo" 
          placeholder="What needs to be done?" 
          value={text}
          onChange={this.handleChange} 
          autoFocus 
        />
      </form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;