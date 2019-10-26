import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSchool } from '../../store/actions/schoolActions';
import { Redirect } from 'react-router-dom';
import { storage } from '../../config/fbConfig';

const StyledCreateSchool = styled.section`
	#schoolName {
		border-radius: 15px;
		border: none;
		width: 100%;
		margin: 0.25rem 0;
		font-size: inherit;
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

	.school-logo-input {
		&::before {
			content: 'Choose logo';
		}
	}

	.school-bg-input {
		&::before {
			content: 'Choose background';
		}
	}

	@media (max-width: 813px) {
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
			<StyledCreateSchool className="site-container">
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
								className="custom-file-input school-logo-input"
								type="file"
								onChange={this.handleChooseSchoolLogo}
							/>
							<button
								className="btn btn-choose"
								style={{ margin: '0 0 0 0.5rem' }}
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
								className="custom-file-input school-bg-input"
								type="file"
								onChange={this.handleChooseSchoolBackground}
							/>
							<button
								className="btn btn-choose"
								style={{ margin: '0 0 0 0.5rem' }}
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
