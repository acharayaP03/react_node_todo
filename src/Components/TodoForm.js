import React, { Component } from 'react';



export default class TodoForm extends Component{
	constructor(props){
		super(props);
		this.state ={
			inputValue : ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){

		this.setState({inputValue: e.target.value})
	}

	handleSubmit(e){
		const { addTodos } = this.props;
		if(e.charCode === 13){
			addTodos(this.state.inputValue)
			this.setState({inputValue : ''});
		}
		//this.setState({inputValue : ''})
	}

	render(){
		return(
			<div>
				<section className="form">
					<input className="todoInput" type="text" onKeyPress={this.handleSubmit} onChange={this.handleChange} value={this.state.inputValue} placeholder="Insert your task here..." />
				</section> 
			</div>
		)
	}
}