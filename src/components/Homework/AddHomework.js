import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAddHomework = styled.div`
	.input-homework {
		border-radius: 15px;
		border: 1px solid #d2d2d2;
		width: 135px;
		padding: 5px 10px;
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
