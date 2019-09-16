import React, { Component } from 'react';
import styled from 'styled-components';
import RemindersList from './RemindersList';
import AddReminder from './AddReminders';

const StyledReminders = styled.aside`
	width: 25vw;
	height: calc(50% - 50px);
	padding: 25px;
	border-bottom: 1px solid #d2d2d2;
	border-right: 1px solid #d2d2d2;
	background: #fff;
	position: fixed;
	top: 100px;

	.title {
		font-size: 2rem;
		font-weight: 600;
		user-select: none;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (max-width: 1359px) {
		padding: 12.5px;

		.title {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 1124px) {
		position: static;
		top: 0px;
		width: 80%;
		border: none;
		margin: 100px 1rem 0px 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: 1px solid #d2d2d2;

		.container {
			flex-direction: column;
		}
	}

	@media (max-width: 813px) {
		width: 100%;
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
