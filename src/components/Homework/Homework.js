import React, { Component } from 'react';
import styled from 'styled-components';
import HomeworkList from './HomeworkList';
import AddHomework from './AddHomework';

const StyledHomework = styled.aside`
	width: 25vw;
	height: 44.6vh;
	padding: 25px;
	border-left: 1px solid #d2d2d2;
	border-bottom: 1px solid #d2d2d2;
	position: fixed;
	background: #fff;
	top: 100px;

	.title {
		font-size: 2rem;
		font-weight: 600;
	}

	.container {
		display: flex;
		justify-content: space-between;
	}
`;

class Homework extends Component {
	state = {
		todos: [
			{ id: 1, content: 'Math: ex.1, p.5' },
			{ id: 2, content: 'English: ex.1, p.6' },
			{ id: 3, content: 'Spanish: ex.1, p.3' }
		]
	};
	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todos
		});
	};
	addTodo = todo => {
		todo.id = Math.random();
		let todos = [...this.state.todos, todo];
		this.setState({
			todos
		});
	};
	render() {
		return (
			<StyledHomework>
				<div className="container">
					<h1 className="title">Homework</h1>
					<AddHomework addTodo={this.addTodo} />
				</div>
				<HomeworkList todos={this.state.todos} deleteTodo={this.deleteTodo} />
			</StyledHomework>
		);
	}
}

export default Homework;
