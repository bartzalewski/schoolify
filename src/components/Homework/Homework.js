import React, { Component } from 'react';
import styled from 'styled-components';
import HomeworkList from './HomeworkList';
import AddHomework from './AddHomework';

const StyledHomework = styled.aside`
	width: 25vw;
	height: calc(50% - 50px);
	padding: 25px;
	border-left: 1px solid #d2d2d2;
	border-bottom: 1px solid #d2d2d2;
	position: fixed;
	background: #fff;
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

	.homework-list {
		background: #4caf50;
		border-radius: 10px;
		position: relative;
		margin-top: 2rem;
		transition: 0.2s;

		&:hover {
			transform: scale(1.025);
			transition: 0.2s;
		}

		@media (max-width: 1124px) {
			width: 50%;
			margin: 2rem auto;
		}
	}

	.homework-list::before {
		content: 'TOMORROW';
		width: fit-content;
		height: fit-content;
		background: #4caf50;
		position: absolute;
		color: #fff;
		border-radius: 10px;
		padding: 0 5px;
		left: 0;
		right: 0;
		top: -17px;
		margin: auto;
	}

	@media (max-width: 1359px) {
		top: 60px;
		padding: 12.5px;
		height: calc(50% - 30px);

		.title {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 1124px) {
		position: static;
		top: 0px;
		width: 100%;
		border: none;
		text-align: center;
		border-bottom: 1px solid #d2d2d2;
		padding: 3.375px;

		.container {
			flex-direction: column;
		}

		.title {
			font-size: 1rem;
		}
	}
`;

class Homework extends Component {
	state = {
		todos: [
			{ id: 1, content: 'Math: ex.1, p.5' },
			{ id: 2, content: 'English: ex.1, p.6' },
			{ id: 3, content: 'Spanish: ex.1, p.3' }
		],
		active: false
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
	isHidden = () => {
		this.setState({
			active: !this.state.active
		});
	};
	render() {
		return (
			<StyledHomework>
				<div className="container">
					<h1 onClick={this.isHidden} className="title">
						Homework
					</h1>
					{!this.state.active && <AddHomework addTodo={this.addTodo} />}
				</div>
				{!this.state.active && (
					<HomeworkList todos={this.state.todos} deleteTodo={this.deleteTodo} />
				)}
			</StyledHomework>
		);
	}
}

export default Homework;
