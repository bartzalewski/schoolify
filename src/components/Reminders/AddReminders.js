import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAddReminders = styled.div`
	.input-reminder {
		border-radius: 15px;
		border: 1px solid #d2d2d2;
		width: 125px;
		padding: 5px 10px !important;
	}
`;

export default class AddReminders extends Component {
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
			<StyledAddReminders>
				<form onSubmit={this.handleSubmit}>
					<input
						className="input-reminder"
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
						placeholder="Add a reminder"
					/>
				</form>
			</StyledAddReminders>
		);
	}
}
