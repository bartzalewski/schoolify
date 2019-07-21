import React, { Component } from 'react';
import styled from 'styled-components';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const StyledSignUp = styled.div`
	.signup-title {
		font-size: 24px;
		font-weight: 600;
		background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.signup-form {
		position: absolute;
		bottom: 0;
		padding-bottom: 100px;
	}
`;

class SignUp extends Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: ''
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
						<label htmlFor="firstName" />
						<input
							type="text"
							id="firstName"
							onChange={this.handleChange}
							placeholder="First Name"
						/>
					</div>
					<div className="input-field">
						<label htmlFor="lastName" />
						<input
							type="text"
							id="lastName"
							onChange={this.handleChange}
							placeholder="Last Name"
						/>
					</div>
					<div className="input-field">
						<label htmlFor="email" />
						<input
							type="email"
							id="email"
							onChange={this.handleChange}
							placeholder="E-mail"
						/>
					</div>
					<div className="input-field">
						<label htmlFor="password" />
						<input
							type="password"
							id="password"
							onChange={this.handleChange}
							placeholder="Password"
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
