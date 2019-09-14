import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const StyledSignIn = styled.section`
	width: 49%;
	height: fit-content;

	.signin-title {
		font-size: 1.5rem;
		font-weight: 600;
		background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.input-field {
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}

	input#email,
	input#password {
		width: 100%;
		height: 50px;
		font-size: 1.125rem;
		border: 1px solid #d2d2d2;
		border-radius: 10px;

		@media (max-width: 1600px) {
			height: 40px;
		}
	}

	input#email:focus,
	input#password:focus {
		outline: none;
		border: 1px solid #fe843f;
	}

	input {
		margin-top: 10px;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.signIn(this.state);
	};
	render() {
		const { authError } = this.props;
		return (
			<StyledSignIn>
				<form className="signin-form" onSubmit={this.handleSubmit}>
					<h1 className="signin-title">sign in</h1>
					<div className="input-field">
						<label htmlFor="email" />
						<input
							type="email"
							id="email"
							onChange={this.handleChange}
							placeholder="test@test.com"
						/>
					</div>
					<div className="input-field">
						<label htmlFor="password" />
						<input
							type="password"
							id="password"
							onChange={this.handleChange}
							placeholder="test123"
						/>
					</div>
					<div className="input-field">
						<button className="btn">Login</button>
						<div>{authError ? <p>{authError}</p> : null}</div>
					</div>
				</form>
			</StyledSignIn>
		);
	}
}

const mapStateToProps = state => {
	return {
		authError: state.auth.authError
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signIn: creds => dispatch(signIn(creds))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignIn);
