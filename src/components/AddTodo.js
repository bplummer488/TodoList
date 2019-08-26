import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
        <input 
          type="text" 
          name="title" 
          style={inputStyle}
          placeholder="Add Todo ..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{flex: '1', fontWeight: 'bold'}}
        />
      </form>
    )
  }
}

const formStyle = {
  display: 'flex',
  margin: '10px 10px',
  borderRadius: '10px',
  boxShadow: '0px 5px 5px grey'
}

const inputStyle = {
  flex: '10', 
  padding: '5px',
  borderRadius: '10px 0px 0px 10px '
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
