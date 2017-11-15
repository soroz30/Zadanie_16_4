import React from 'react';
import uuid from 'uuid';
import style from './App.css';

const TitleHeader = props => <h1>{props.title}</h1>
const ToDoNumber = props => <p>Number of todos: {props.number}</p>

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <TitleHeader title={this.props.title} />
                <ToDoNumber number={this.props.number} />
            </div>
        )
    }
}

export default Title;