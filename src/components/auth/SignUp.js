import React, { Component } from 'react';
import styled from 'styled-components';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import avatar from '../../images/user.svg';
import capitalize from 'capitalize-sentence';
import { moreWords } from '../filters/filters';
const Filter = require('bad-words');
const filter = new Filter();

const StyledSignUp = styled.div`
	width: 49%;
	height: fit-content;

	.signup-form {
		width: 100%;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;

class SignUp extends Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		userAvatar: `${avatar}`
	};

	moderateMessage = message => {
		if (this.isShouting(message)) {
			message = this.stopShouting(message);
		}
		return this.capitalizeFirstLetter(message);
	};

	capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

	isShouting = message => {
		return (
			message.replace(/[^A-Z]/g, '').length > message.length / 2 ||
			message.replace(/[^!]/g, '').length >= 3
		);
	};

	stopShouting = message => {
		return capitalize(message.toLowerCase()).replace(/!+/g);
	};

	handleChange = async e => {
		await this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.state.firstName = this.moderateMessage(this.state.firstName);
		this.state.lastName = this.moderateMessage(this.state.lastName);
		this.state.firstName = filter.clean(this.state.firstName);
		this.state.lastName = filter.clean(this.state.lastName);
		if (
			this.state.firstName.includes('*') ||
			this.state.lastName.includes('*')
		) {
			console.log(`Illegal characters used. Can't signup.`);
			return null;
		} else {
			this.props.signUp(this.state);
		}
	};

	componentDidMount = () => {
		filter.addWords(...moreWords);
	};

	render() {
		console.log(this.props);
		return (
			<StyledSignUp>
				<form className="signup-form" onSubmit={this.handleSubmit}>
					<h1 className="signup-title">sign up</h1>
					<div className="input-field">
						<input
							type="text"
							id="firstName"
							onChange={this.handleChange}
							placeholder="First Name"
							aria-label="firstName"
						/>
					</div>
					<div className="input-field">
						<input
							type="text"
							id="lastName"
							onChange={this.handleChange}
							placeholder="Last Name"
							aria-label="lastName"
						/>
					</div>
					<div className="input-field">
						<input
							type="email"
							id="email"
							onChange={this.handleChange}
							placeholder="E-mail"
							aria-label="email"
						/>
					</div>
					<div className="input-field">
						<input
							type="password"
							id="password"
							onChange={this.handleChange}
							placeholder="Password"
							aria-label="password"
						/>
					</div>
					<div className="input-field">
						<button className="btn">Sign Up</button>
					</div>
				</form>
			</StyledSignUp>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signUp: newUser => dispatch(signUp(newUser))
	};
};

export default connect(null, mapDispatchToProps)(SignUp);
