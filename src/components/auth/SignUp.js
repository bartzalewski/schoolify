import React, { Component } from 'react';
import styled from 'styled-components';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import avatar from '../../images/user.svg';

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
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.signUp(this.state);
	};
	render() {
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

export default connect(
	null,
	mapDispatchToProps
)(SignUp);
