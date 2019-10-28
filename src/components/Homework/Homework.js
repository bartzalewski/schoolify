import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { db } from '../../config/fbConfig';
import firebase from '../../config/fbConfig';

const StyledHomework = styled.aside`
	width: 25vw;
	height: calc(50% - 50px);
	padding: 25px;
	border-left: 1px solid #d2d2d2;
	border-bottom: 1px solid #d2d2d2;
	position: fixed;
	background: #fff;
	top: 100px;

	.title {
		font-size: 2rem;
		font-weight: 600;
		user-select: none;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.homework-list {
		background: #4caf50;
		border-radius: 10px;
		position: relative;
		margin-top: 2rem;
		transition: 0.2s;

		&:hover {
			transform: scale(1.025);
			transition: 0.2s;
		}

		@media (max-width: 1124px) {
			width: 50%;
			margin: 2rem auto;
		}
	}

	.homework-list::before {
		content: 'TOMORROW';
		width: fit-content;
		height: fit-content;
		background: #4caf50;
		position: absolute;
		color: #fff;
		border-radius: 10px;
		padding: 0 5px;
		left: 0;
		right: 0;
		top: -17px;
		margin: auto;
	}

	.input-homework {
		width: 135px;
	}

	.homework-item {
		color: #fff;
		border-radius: 10px;
		padding: 5px 15px;

		@media (max-width: 1359px) {
			padding: 2.5px 10px;
		}
	}

	@media (max-width: 1359px) {
		top: 60px;
		padding: 12.5px;
		height: calc(50% - 30px);

		.title {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 1124px) {
		position: static;
		top: 0px;
		width: 100%;
		border: none;
		text-align: center;
		border-bottom: 1px solid #d2d2d2;
		padding: 3.375px;

		.container {
			flex-direction: column;
		}

		.title {
			font-size: 1rem;
		}
	}
`;

class Homework extends Component {
	state = {
		content: '',
		active: true
	};
	handleChange = async e => {
		await this.setState({
			content: e.target.value
		});
	};
	addHomework = e => {
		e.preventDefault();
		db.collection('users')
			.where('email', '==', this.props.auth.email)
			.get()
			.then(snap =>
				snap.forEach(doc => {
					const { homework } = doc.data();
					db.collection('users')
						.doc(doc.id)
						.update({
							homework: firebase.firestore.FieldValue.arrayUnion(
								this.state.content
							)
						});
					console.log(homework);
				})
			);
		document.getElementById('input-homework').value = '';
	};
	removeHomework = e => {
		e.preventDefault();
		e.persist();
		db.collection('users')
			.where('email', '==', this.props.auth.email)
			.get()
			.then(snap =>
				snap.forEach(doc => {
					const { homework } = doc.data();
					db.collection('users')
						.doc(doc.id)
						.update({
							homework: firebase.firestore.FieldValue.arrayRemove(
								e.target.innerText
							)
						});
					console.log(homework);
				})
			);
	};
	isHidden = () => {
		this.setState({
			active: !this.state.active
		});
	};
	componentDidMount() {
		db.collection('users')
			.where('email', '==', this.props.auth.email)
			.get()
			.then(snap =>
				snap.forEach(doc => {
					const { homework } = doc.data();
					for (const element of homework) {
						const homeworkList = document.getElementById('homework-list');
						const div = document.createElement('div');
						div.classList.add('homework-item');
						homeworkList.appendChild(div);
						div.innerText = element;
					}
				})
			);
	}
	render() {
		if (window.innerWidth >= 1124) {
			this.state.active = false;
		}
		return (
			<StyledHomework>
				<div className="container">
					<h1 onClick={this.isHidden} className="title">
						Homework
					</h1>
					{!this.state.active && (
						<form onSubmit={this.addHomework}>
							<input
								id="input-homework"
								type="text"
								placeholder="Add a homework"
								className="input-aside input-homework"
								active={this.state.active}
								onChange={this.handleChange}
							/>
						</form>
					)}
				</div>
				<div
					id="homework-list"
					className="homework-list"
					onClick={this.removeHomework}
				></div>
			</StyledHomework>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	};
};

export default connect(mapStateToProps)(Homework);
