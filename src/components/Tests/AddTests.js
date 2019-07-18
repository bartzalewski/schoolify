import React, { Component } from 'react';

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
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="Add a test"
						className="input-tests"
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
					/>
				</form>
			</div>
		);
	}
}
