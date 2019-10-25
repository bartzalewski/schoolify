import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAddHomework = styled.div`
	.input-homework {
		width: 135px;
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
						className="input-aside input-homework"
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
