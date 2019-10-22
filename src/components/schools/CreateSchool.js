import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSchool } from '../../store/actions/schoolActions';
import { Redirect } from 'react-router-dom';
import { storage } from '../../config/fbConfig';

const StyledCreateSchool = styled.section`
	width: 50vw;
	background: #ececf0;

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
		user-select: none;
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

	#upload-post-btn {
		visibility: hidden;
		position: absolute;
		animation: pulse 0.5s infinite alternate;
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
	}

	.btn {
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}

	.btn-choose {
		background: #fff;
		font-weight: 400;
		font-size: 0.9rem;
		color: #293347;
		border: 1px solid #d2d2d2;
	}

	.upload-wrapper {
		margin-top: 1.25rem;
	}

	.upload-container {
		display: flex;
		margin-top: -2.5rem;
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

		h1 {
			font-size: 1.2rem;
		}

		#schoolName {
			font-size: 0.9rem;
		}

		.btn {
			font-size: 0.8rem;
			padding: 0px 12.5px;
		}
	}
`;

class CreateSchool extends Component {
	state = {
		schoolName: '',
		schoolLogo: null,
		schoolBackground: null,
		progress: 0
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.createSchool(this.state);
		this.props.history.push('/school-list');
	};
	handleChooseSchoolLogo = e => {
		if (e.target.files[0]) {
			const schoolLogo = e.target.files[0];
			this.setState(() => ({ schoolLogo }));
		}
		console.log(this.state);
	};
	handleUploadSchoolLogo = () => {
		const { schoolLogo } = this.state;
		const imageName = `${schoolLogo.name +
			Math.round(Math.random() * 1000000000000)}`;
		const uploadTask = storage
			.ref(`images/schools/logos/${imageName}`)
			.put(schoolLogo);
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
					.ref('images/schools/logos')
					.child(imageName)
					.getDownloadURL()
					.then(schoolLogo => {
						this.setState({ schoolLogo });
					});
			}
		);
		uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
			console.log('File available at', downloadURL);
			return downloadURL;
		});
	};
	handleChooseSchoolBackground = e => {
		if (e.target.files[0]) {
			const schoolBackground = e.target.files[0];
			this.setState(() => ({ schoolBackground }));
		}
		console.log(this.state);
	};
	handleUploadSchoolBackground = () => {
		const { schoolBackground } = this.state;
		const imageName = `${schoolBackground.name +
			Math.round(Math.random() * 1000000000000)}`;
		const uploadTask = storage
			.ref(`images/schools/backgrounds/${imageName}`)
			.put(schoolBackground);
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
					.ref('images/schools/backgrounds')
					.child(imageName)
					.getDownloadURL()
					.then(schoolBackground => {
						this.setState({ schoolBackground });
					});
			}
		);
		uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
			console.log('File available at', downloadURL);
			return downloadURL;
		});
	};
	render() {
		const { auth } = this.props;
		const uploadPostButton = document.getElementById('upload-post-btn');
		// console.log(`this is url: ${this.state.schoolLogo || 'none'} `);
		console.log(this.state);
		if (!auth.uid) return <Redirect to="/" />;
		if (
			this.state.schoolBackground !== File &&
			this.state.schoolBackground !== null &&
			this.state.schoolLogo !== File &&
			this.state.schoolLogo !== null &&
			this.state.progress === 100 &&
			this.state.schoolName !== ''
		) {
			uploadPostButton.disabled = false;
			uploadPostButton.style.visibility = 'visible';
		}
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
						<button
							id="upload-post-btn"
							disabled
							className="btn"
							style={{ margin: '10rem 0 0 0' }}
							onClick={this.handleSubmit}
						>
							Add School
						</button>
					</form>
					<progress value={this.state.progress} max="100" />
					<br />
					<div className="upload-wrapper">
						<div className="upload-container">
							<input
								className="custom-file-input"
								type="file"
								onChange={this.handleChooseSchoolLogo}
							/>
							<button
								className="btn btn-choose"
								style={{ margin: '0 0 0 1rem' }}
								onClick={this.handleUploadSchoolLogo}
							>
								Upload Scholo Logo
							</button>
						</div>
						<br />
						<progress value={this.state.progress} max="100" />
						<br />
						<div className="upload-container">
							<input
								className="custom-file-input"
								type="file"
								onChange={this.handleChooseSchoolBackground}
							/>
							<button
								className="btn btn-choose"
								style={{ margin: '0 0 0 1rem' }}
								onClick={this.handleUploadSchoolBackground}
							>
								Upload School Background
							</button>
						</div>
					</div>
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
