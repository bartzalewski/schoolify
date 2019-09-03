import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSchool } from '../../store/actions/schoolActions';
import { Redirect } from 'react-router-dom';

const StyledCreateSchool = styled.section`
	width: 50vw;
	background: #ececf0;

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
	}

	#schoolName {
		border-radius: 15px;
		border: 1px solid #d2d2d2;
		width: 100%;
		margin: 0.25rem 0;
		font-size: inherit;
	}

	#schoolName:focus {
		border: 1px solid #fe843f;
		outline: none;
	}

	input[placeholder],
	textarea[placeholder] {
		padding: 10px 15px;
	}

	.container {
		padding: 40px;
	}

	.btn {
		border-radius: 10px;
		background: -webkit-linear-gradient(left, #fe843f, #fc5a37);
		color: #fff;
		font-weight: 600;
		border: none;
		height: 50px;
		font-size: 1.125rem;
		cursor: pointer;
		padding: 10px 25px;
		margin-top: 20px;
	}

	.input-field:first-of-type {
		margin-top: 2rem;
	}

	@media (max-width: 1359px) {
		padding: 12.5px;

		.container {
			padding: 20px;
		}
	}

	@media (max-width: 1124px) {
		width: 80%;
	}

	@media (max-width: 813px) {
		width: 100%;

		.container {
			padding: 10px;
		}
	}
`;

class CreateSchool extends Component {
	state = {
		schoolName: '',
		schoolLogo:
			'https://firebasestorage.googleapis.com/v0/b/schoolify-167f2.appspot.com/o/images%2Fschools%2Flogos%2Fzsz-zabk-logo.gif?alt=media&token=15dcf72f-0f92-4890-8256-4ae7c686c768',
		schoolBackground: ''
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.createSchool(this.state);
		this.props.history.push('/');
	};
	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to="/" />;
		return (
			<StyledCreateSchool>
				<div className="container">
					<form onSubmit={this.handleSubmit}>
						<h1>Add a new school</h1>
						<div className="input-field">
							<label htmlFor="schoolName" />
							<input
								placeholder="School Name"
								type="text"
								id="schoolName"
								onChange={this.handleChange}
							/>
						</div>
						<div className="input-field">
							<button className="btn">Create</button>
						</div>
					</form>
				</div>
			</StyledCreateSchool>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createSchool: school => dispatch(createSchool(school))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateSchool);
