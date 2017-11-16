import React from 'react';
import uuid from 'uuid';
import style from '../css/App.css';
import Title from './Title.js';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

const startData = [{
                        id: 1,
                        text: 'clean room'
                    }, {
                        id: 2,
                        text: 'wash the dishes'
                    }, {
                        id: 3,
                        text: 'feed my cat'
                }];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: startData
        };
    }
    
    addTodo(val) {
        console.log(val);
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title='Todo List' number={this.state.data.length}/>
                <TodoList todos={this.state.data} remove={this.removeTodo.bind(this)}/>
                <TodoForm addTodo={this.addTodo.bind(this)}/>
            </div>
        )
    }
}

export default App;