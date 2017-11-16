import React from 'react';
import style from './TodoForm.css';

const FormForTodo = props => {
    return ( 
        <form className={style.TodoForm} onSubmit={props.handleSubmit}>
            <label htmlFor='text'>Name</label>
            <input id='text' onChange={props.handleInputChange} value={props.inputValue}/>
            <input type='submit' value='Submit' className='btn btn-success'/>
        </form>
    )
}

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleInputChange(event) {
        let text = event.target.value;
        this.setState({
            input: text
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let todo = this.state.input;
        if (/\S/.test(todo)) {
            this.props.addTodo(todo);
            this.setState({
                input: ''
            });
        }
    }

    render() {
        return (
            <FormForTodo 
                handleInputChange={this.handleInputChange.bind(this)} 
                handleSubmit={this.handleSubmit.bind(this)} 
                inputValue={this.state.input}
            />
        )
    }
}

export default TodoForm;