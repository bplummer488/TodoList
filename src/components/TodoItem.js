import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: this.props.todo.completed ? '#E0F8F1' : '#F8E0E6',
            boxShadow: '0px 5px 5px grey',
            padding: '10px 10px',
            margin: '10px 10px',
            borderBottom: '1px #ccc dotted',
            textAlign: 'center',
            borderRadius: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    getStyleChecked = () => {
        return {
            background: this.props.todo.completed ? '#fff' : '#fff',
            color: this.props.todo.completed ? '#ff0000' : '#fff',
            boxShadow: this.props.todo.completed ? '0px 5px 5px rgba(0, 80, 0, 0.5)' : '0px 5px 5px rgba(80, 0, 0, 0.5)',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'left'      
        }
    }

    btnStyle = () => {
        return {
            background: '#fff',
            color: '#ff0000',
            boxShadow: this.props.todo.completed ? '0px 5px 5px rgba(0, 80, 0, 0.5)' : '0px 5px 5px rgba(80, 0, 0, 0.5)',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right' 
        }
    }
    
    render() {
        const{ id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <button onClick={this.props.markComplete.bind(this, id)} style={this.getStyleChecked()}>✓</button>
                    {/*<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '} */}
                    <button onClick={this.props.delTodo.bind(this, id)} style={this.btnStyle()}>x</button>
                    <div  style={titleStyleP}>
                        <p>{ title }</p>
                    </div>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const titleStyleP = {
    textAlign: 'center',
    padding: '5px',
    margin: '5 auto'
}



export default TodoItem
