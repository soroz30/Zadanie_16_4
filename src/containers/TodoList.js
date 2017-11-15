import React from 'react';
import style from './TodoList.css';

const TodoItem = props => {
    let todos = props.todos.map(todo => {
        return <li>{todo.text} <button onClick={() => props.remove(todo.id)}>x</button></li>
    });
    return (
        <ul className={style.TodoList}>{todos}</ul>
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