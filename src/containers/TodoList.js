import React from 'react';
import style from './TodoList.css';

const TodoItem = props => {
    let todos = props.todos.map(todo => {
        return <li>{todo.text} <button className='btn btn-danger' onClick={() => props.remove(todo.id)}>x</button></li>
    });
    return (
        <ol className={style.TodoList}>{todos}</ol>
    )
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TodoItem todos={this.props.todos} remove={this.props.remove}/>
        )
    }
}

export default TodoList;