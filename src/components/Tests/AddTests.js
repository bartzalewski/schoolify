import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAddTests = styled.div`
	.input-tests {
		width: 90px;
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
						className="input-aside input-tests"
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
					/>
				</form>
			</StyledAddTests>
		);
	}
}
