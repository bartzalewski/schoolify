import React, { Component } from 'react';

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
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						className="input-reminder"
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
						placeholder="Add a reminder"
					/>
				</form>
			</div>
		);
	}
}
