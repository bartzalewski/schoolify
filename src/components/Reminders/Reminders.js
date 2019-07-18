import React, { Component } from 'react';
import styled from 'styled-components';
import RemindersList from './RemindersList';
import AddReminder from './AddReminders';

const StyledReminders = styled.aside`
	width: 25vw;
	height: 44.6vh;
	padding: 25px;
	border-bottom: 1px solid #d2d2d2;
	border-right: 1px solid #d2d2d2;
	background: #fff;
	position: fixed;
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

class Reminders extends Component {
	state = {
		todos: [
			{ id: 1, content: 'use a planner' },
			{ id: 2, content: 'get enough sleep' },
			{ id: 3, content: 'get organized' },
			{ id: 4, content: 'lay out your outfit before' }
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
			<StyledReminders>
				<div className="container">
					<h1 className="title">Reminders</h1>
					<AddReminder addTodo={this.addTodo} />
				</div>
				<RemindersList todos={this.state.todos} deleteTodo={this.deleteTodo} />
			</StyledReminders>
		);
	}
}

export default Reminders;
