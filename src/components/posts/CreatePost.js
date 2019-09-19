import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import SchoolList from '../schools/SchoolList';
import FeedUpload from '../upload/FeedUpload';
import firebase from 'firebase/app';
import { storage } from '../../config/fbConfig';

const StyledCreatePost = styled.section`
	width: 50vw;
	background: #ececf0;

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
		user-select: none;
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
		width: fit-content;
		font-size: 1.125rem;
		cursor: pointer;
		padding: 10px 25px;
		margin-top: 2rem;
		position: absolute;
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}

	.input-field {
		transition: 0.2s;

		&:hover {
			transform: scale(1.025);
			transition: 0.2s;
		}
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
		schoolLogo: '',
		content: '',
		postBackground: null,
		url: ''
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.createPost(this.state);
		// this.props.history.push('/');
	};
	handleChoose = e => {
		if (e.target.files[0]) {
			const postBackground = e.target.files[0];
			this.setState(() => ({ postBackground }));
		}
	};
	handleUpload = () => {
		const { postBackground } = this.state;
		const uploadTask = storage
			.ref(`images/feed/${postBackground.name}`)
			.put(postBackground);
		uploadTask.on(
			'state_changed',
			error => {
				console.log(error);
			},
			() => {
				storage
					.ref('images/feed')
					.child(postBackground.name)
					.getDownloadURL()
					.then(url => {
						console.log(url);
						this.setState({ url });
					});
			}
		);
		uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
			console.log('File available at', downloadURL);
			return downloadURL;
		});
	};
	fileUpload = () => {
		var image;

		var storageRef = firebase.storage().ref();

		var uploadTask = storageRef.child('images/feed' + image).put(image);

		uploadTask.on(
			firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
			function() {
				uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
					console.log('File available at', downloadURL);
				});
			}
		);
	};
	render() {
		const { auth, schools } = this.props;
		console.log(schools);
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
						<div>{/* <FeedUpload></FeedUpload> */}</div>
						<input id="send" type="file" onChange={this.handleChoose} />
						<button onClick={this.handleUpload}>upload</button>
					</form>
					{/* <SchoolList schools={schools} /> */}
				</div>
			</StyledCreatePost>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		schools: state.firestore.ordered.schools
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createPost: post => dispatch(createPost(post))
	};
};

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	firestoreConnect([{ collection: 'schools', orderBy: ['createdAt', 'desc'] }])
)(CreatePost);
