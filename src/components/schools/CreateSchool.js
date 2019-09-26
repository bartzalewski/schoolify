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
		const uploadTask = storage
			.ref(`images/schools/logos/${schoolLogo.name}`)
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
					.child(schoolLogo.name)
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
		const uploadTask = storage
			.ref(`images/schools/backgrounds/${schoolBackground.name}`)
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
					.child(schoolBackground.name)
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
		// console.log(`this is url: ${this.state.schoolLogo || 'none'} `);
		// console.log(this.state);
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
						<button className="btn" onClick={this.handleSubmit}>
							Add School
						</button>
					</form>
					<progress value={this.state.progress} max="100" />
					<br />
					<input type="file" onChange={this.handleChooseSchoolLogo} />
					<button onClick={this.handleUploadSchoolLogo}>
						Upload Scholo Logo
					</button>
					<br />
					<progress value={this.state.progress} max="100" />
					<br />
					<input type="file" onChange={this.handleChooseSchoolBackground} />
					<button onClick={this.handleUploadSchoolBackground}>
						Upload School Background
					</button>
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
