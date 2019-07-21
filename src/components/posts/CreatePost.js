import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';

const StyledCreatePost = styled.section`
	width: 50vw;
	height: 89.2vh;
	background: #ececf0;

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
	}

	.container {
		padding: 40px;
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
					<form className="white" onSubmit={this.handleSubmit}>
						<h1 className="grey-text text-darken-3">Create new post</h1>
						<div className="input-field">
							<label htmlFor="title">Title</label>
							<input type="text" id="title" onChange={this.handleChange} />
						</div>
						<div className="input-field">
							<label htmlFor="content">Post Content</label>
							<textarea id="content" onChange={this.handleChange} />
						</div>
						<div className="input-field">
							<button className="btn pink lighten-1 z-depth-0">Create</button>
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
