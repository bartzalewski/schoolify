import React, { Component } from 'react';

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
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						className="input-homework"
						placeholder="Add a homework"
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
					/>
				</form>
			</div>
		);
	}
}
