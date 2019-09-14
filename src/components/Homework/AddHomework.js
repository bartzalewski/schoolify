import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAddHomework = styled.div`
	transition: 0.2s;

	&:hover {
		transform: scale(1.05);
		transition: 0.2s;
	}

	.input-homework {
		border-radius: 10px;
		border: 1px solid #d2d2d2;
		width: 135px;
		padding: 5px 10px;
		text-align: center;

		@media (max-width: 1359px) {
			padding: 2.5px 5px;
			font-size: 0.8rem;
		}
	}

	.input-homework:focus {
		outline: none;
		border: 1px solid #fe843f;
	}
`;

export default class AddHomework extends Component {
	state = {
		content: ''
	};
	handleChange = e => {
		this.setState({
			content: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			content: ''
		});
	};
	render() {
		return (
			<StyledAddHomework>
				<form onSubmit={this.handleSubmit}>
					<input
						className="input-homework"
						placeholder="Add a homework"
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
					/>
				</form>
			</StyledAddHomework>
		);
	}
}
