import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

import * as apiCalls from '../API/api';

class TodoList extends Component {

	constructor(props){
		super(props);
		this.state = {
			todos: []
		}
		this.addTodos = this.addTodos.bind(this);
	}

	componentDidMount(){
		this.loadTodos();
	}

	//load todos from the database...
	async loadTodos(){
		let todos = await apiCalls.getTodos();
		this.setState({todos})
	}

	async addTodos(val){
		let newTodo = await apiCalls.createTodos(val)
		this.setState({todos : [...this.state.todos, newTodo]})
	}

	async deleteTodo(id){
		await apiCalls.removeTodo(id);
		const todos = this.state.todos.filter( todo => todo._id !== id)
		this.setState({ todos })
	}

	async toggleTodo(todo){
		let updatedTodo = await apiCalls.updateTodo(todo)
		const todos = this.state.todos.map( t => 
			(t._id === updatedTodo._id)
			? { ...t, completed: !t.completed }
			: t
		)
		this.setState({ todos })
	
	}

	render(){
		const todos = this.state.todos.map((t, i)=>{
			return <TodoItem 
						key={t._id} 
						{...t} 
						//since t._id will be undefined in the constructor, we will bind this and pass todo id from the db
						onDelete={this.deleteTodo.bind(this, t._id)}
						//here we need to identify if the todo is completed or not hence, we will pass the entire todo oject.
						onToggle={ this.toggleTodo.bind(this, t)}
						/>
		});

		return(
			<div>
				<TodoForm addTodos={this.addTodos}/>
				<ul className="list">
					{todos}
  				</ul>
			</div>
		)
	}
}

export default TodoList;
