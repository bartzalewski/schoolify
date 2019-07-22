import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAddTests = styled.div`
	.input-tests {
		border-radius: 15px;
		border: 1px solid #d2d2d2;
		width: 90px;
		padding: 5px 10px !important;
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
