import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { storage, db } from '../../config/fbConfig';

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

	#schoolName {
		padding: 10px 15px;
		background: #fff;
		font-family: 'Poppins';
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
		margin: 2rem 0;
		position: relative;
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
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
	constructor(props) {
		super(props);
		this.state = {
			schoolName: '',
			schoolLogo: '',
			content: '',
			postBackground: null,
			progress: 0
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
		// this.setState({
		// 	schoolName: { [e.target.id]: e.target.innerText },
		// 	schoolLogo: { [e.target.id]: e.target.value }
		// });
	};
	handleSelect = e => {
		if (e.target.id === 'schoolName') {
			this.setState({
				// schoolName: e.target.innerText,
				schoolName: e.target.querySelector('option').innerText,
				schoolLogo: e.target.value
			});
		}
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
		const uploadTask = storage
			.ref(`images/feed/${postBackground.name}`)
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
					.child(postBackground.name)
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
					schoolList.appendChild(option);
					option.innerText = schoolName;
					option.value = schoolLogo;
				})
			);
	}
	render() {
		const { auth, schools } = this.props;
		// console.log(`this is url: ${this.state.url || 'none'} `);
		console.log(this.state);
		if (!auth.uid) return <Redirect to="/" />;
		return (
			<StyledCreatePost>
				<div className="container">
					<form onSubmit={this.handleSubmit}>
						<h1>Create new post</h1>
						<div className="input-field">
							<label htmlFor="schoolName" />
							<select id="schoolName" onChange={this.handleSelect}>
								{/* <option disabled selected>
									Select your school
								</option> */}
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
						<button className="btn" onClick={this.handleSubmit}>
							Upload Post
						</button>
					</form>
					<progress value={this.state.progress} max="100" />
					<br />
					<input type="file" onChange={this.handleChoose} />
					<button onClick={this.handleUpload}>Upload Image</button>
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
