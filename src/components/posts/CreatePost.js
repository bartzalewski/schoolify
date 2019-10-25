import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { storage, db } from '../../config/fbConfig';

const StyledCreatePost = styled.section`
	#schoolName,
	#content {
		border-radius: 15px;
		border: none;
		width: 100%;
		margin: 0.25rem 0;
		font-size: inherit;
	}

	#schoolName {
		padding: 10px 15px;
		background: #fff;
		font-family: 'Poppins';
	}

	#content {
		height: 10rem;
	}

	#upload-post-btn {
		visibility: hidden;
		position: absolute;
		animation: pulse 0.5s infinite alternate;
	}

	input[placeholder],
	textarea[placeholder] {
		padding: 10px 15px;
	}

	.upload-container {
		display: flex;
		margin-top: -1.75rem;
	}

	.input-field:first-of-type {
		margin-top: 2rem;
	}

	@media (max-width: 813px) {
		#schoolName,
		#content {
			font-size: 0.9rem;
		}

		.btn {
			font-size: 0.8rem;
			padding: 0px 12.5px;
		}
	}
`;

class CreatePost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			schoolName: '',
			schoolLogo: '',
			content: '',
			postBackground: null,
			progress: 0,
			authorEmail: this.props.auth.email
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChoose = this.handleChoose.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSelect = e => {
		const schoolList = document.getElementById('schoolName');
		const value = schoolList.value;
		const array = value.split(',');
		this.setState({
			schoolName: array[0],
			schoolLogo: array[1]
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.createPost(this.state);
		this.props.history.push('/');
	};
	handleChoose = e => {
		if (e.target.files[0]) {
			const postBackground = e.target.files[0];
			this.setState(() => ({ postBackground }));
		}
		console.log(this.state);
	};
	handleUpload = () => {
		const { postBackground } = this.state;
		const imageName = `${postBackground.name +
			Math.round(Math.random() * 1000000000000)}`;
		const uploadTask = storage
			.ref(`images/feed/${imageName}`)
			.put(postBackground);
		uploadTask.on(
			'state_changed',
			snapshot => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				this.setState({ progress });
			},
			error => {
				console.log(error);
			},
			() => {
				storage
					.ref('images/feed')
					.child(imageName)
					.getDownloadURL()
					.then(postBackground => {
						this.setState({ postBackground });
					});
			}
		);
		uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
			console.log('File available at', downloadURL);
			return downloadURL;
		});
	};
	componentDidMount() {
		db.collection('schools')
			.get()
			.then(snap =>
				snap.forEach(doc => {
					const { schoolName, schoolLogo } = doc.data();
					const schoolList = document.getElementById('schoolName');
					const option = document.createElement('option');
					const p = document.createElement('p');
					const img = document.createElement('img');
					schoolList.appendChild(option);
					option.appendChild(p);
					option.appendChild(img);
					p.value = schoolName;
					p.innerText = schoolName;
					img.value = schoolLogo;
					option.value = [p.value, img.value];
				})
			);
	}
	render() {
		const { auth } = this.props;
		console.log(this.props.auth);
		const uploadPostButton = document.getElementById('upload-post-btn');
		if (!auth.uid) return <Redirect to="/" />;
		if (
			this.state.postBackground !== null &&
			this.state.progress === 100 &&
			this.state.content !== ''
		) {
			uploadPostButton.disabled = false;
			uploadPostButton.style.visibility = 'visible';
		}
		return (
			<StyledCreatePost className="site-container">
				<div className="container">
					<form onSubmit={this.handleSubmit}>
						<h1>Create new post</h1>
						<div className="input-field">
							<label htmlFor="schoolName" />
							<select id="schoolName" onChange={this.handleSelect}>
								<option disabled selected>
									Select your school
								</option>
							</select>
						</div>
						<div className="input-field">
							<label htmlFor="content" />
							<textarea
								placeholder="Post Content"
								id="content"
								onChange={this.handleChange}
							/>
						</div>
						<button
							id="upload-post-btn"
							disabled
							className="btn"
							style={{ margin: '5rem 0 0 0' }}
							onClick={this.handleSubmit}
						>
							Upload Post
						</button>
					</form>
					<progress value={this.state.progress} max="100" />
					<br />
					<div className="upload-container">
						<input
							className="custom-file-input"
							type="file"
							onChange={this.handleChoose}
						/>
						<button
							className="btn btn-choose"
							style={{ margin: '0 0 0 0.5rem' }}
							onClick={this.handleUpload}
						>
							Upload an image
						</button>
					</div>
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
