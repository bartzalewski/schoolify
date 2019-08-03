import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import FeedUpload from '../upload/FeedUpload';

const StyledCreatePost = styled.section`
	width: 50vw;
	background: #ececf0;

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
	}

	#schoolName,
	#content {
		border-radius: 15px;
		border: 1px solid #d2d2d2;
		width: 100%;
		margin: 0.25rem 0;
		font-size: inherit;
	}

	#content {
		height: 10rem;
	}

	#schoolName:focus,
	#content:focus {
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

class CreatePost extends Component {
	state = {
		schoolName: '',
		schoolLogo:
			'https://firebasestorage.googleapis.com/v0/b/schoolify-167f2.appspot.com/o/images%2Fschools%2Flogos%2Fzsz-zabk-logo.gif?alt=media&token=15dcf72f-0f92-4890-8256-4ae7c686c768',
		content: '',
		postBackground: `https://firebasestorage.googleapis.com/v0/b/schoolify-167f2.appspot.com/o/images%2Ffeed%2Fzszfeed.jpg?alt=media&token=6e133a8f-1363-4e7e-b084-4b4d549b1100`
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.createPost(this.state);
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
		createPost: post => dispatch(createPost(post))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePost);
