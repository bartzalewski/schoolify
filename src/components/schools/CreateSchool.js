import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSchool } from '../../store/actions/schoolActions';
import { Redirect } from 'react-router-dom';
import FeedUpload from '../upload/FeedUpload';

const StyledCreatePost = styled.section`
	width: 50vw;
	background: #ececf0;

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
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
		this.props.createPost(this.state);
		this.props.history.push('/');
	};
	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to="/" />;
		return (
			<StyledCreatePost>
				<div className="container">
					<form onSubmit={this.handleSubmit}>
						<h1>Create new post</h1>
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
							<label htmlFor="content" />
							<textarea
								placeholder="Post Content"
								id="content"
								onChange={this.handleChange}
							/>
						</div>
						<div className="input-field">
							<FeedUpload />
						</div>
						<div className="input-field">
							<button className="btn">Create</button>
						</div>
					</form>
				</div>
			</StyledCreatePost>
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
		createSchool: post => dispatch(createSchool(post))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateSchool);
