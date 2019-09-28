import React, { Component } from 'react';
import styled from 'styled-components';
import TestsList from './TestsList';
import AddTests from './AddTests';

const StyledTests = styled.aside`
	width: 25vw;
	height: calc(50% - 50px);
	padding: 25px;
	border-left: 1px solid #d2d2d2;
	background: #fff;
	position: fixed;
	bottom: 0;

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
		width: 100%;
		border: none;
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

class Tests extends Component {
	state = {
		todos: [
			{ id: 1, content: '01-09-2019 | Math | Geometry' },
			{ id: 2, content: '02-09-2019 | Biology | Anatomy' },
			{ id: 3, content: '03-09-2019 | Spanish | Thigs at home' },
			{ id: 4, content: '04-09-2019 | English | Essay' }
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
			<StyledTests>
				<div className="container">
					<h1 onClick={this.isHidden} className="title">
						Tests
					</h1>
					{!this.state.active && <AddTests addTodo={this.addTodo} />}
				</div>
				{!this.state.active && (
					<TestsList todos={this.state.todos} deleteTodo={this.deleteTodo} />
				)}
			</StyledTests>
		);
	}
}

export default Tests;
