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
`;

class CreatePost extends Component {
	state = {
		schoolName: '',
		content: ''
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
							<label htmlFor="title">Title</label>
							<input type="text" id="title" onChange={this.handleChange} />
						</div>
						<div className="input-field">
							<label htmlFor="content">Post Content</label>
							<textarea id="content" onChange={this.handleChange} />
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
