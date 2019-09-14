import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAddTests = styled.div`
	transition: 0.2s;

	&:hover {
		transform: scale(1.05);
		transition: 0.2s;
	}

	.input-tests {
		border-radius: 10px;
		border: 1px solid #d2d2d2;
		width: 90px;
		padding: 5px 10px;
		text-align: center;

		@media (max-width: 1359px) {
			padding: 2.5px 5px;
			font-size: 0.8rem;
		}
	}

	.input-tests:focus {
		outline: none;
		border: 1px solid #fe843f;
	}
`;

export default class AddTests extends Component {
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
			<StyledAddTests>
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="Add a test"
						className="input-tests"
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
					/>
				</form>
			</StyledAddTests>
		);
	}
}
