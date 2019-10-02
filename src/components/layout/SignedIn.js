import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Reminders from '../../components/Reminders/Reminders';
import Grades from '../../components/Grades/Grades';
import AddGrades from '../../components/Grades/AddGrades';
import Homework from '../../components/Homework/Homework';
import Tests from '../../components/Tests/Tests';
import News from '../../pages/News';
import Notification from '../../pages/Notification.js';
import Lessons from '../../pages/Lessons.js';
import Chat from '../../pages/Chat';
import CreatePost from '../../components/posts/CreatePost';
import CreateSchool from '../../components/schools/CreateSchool';
import ViewSchools from '../../components/schools/ViewSchools';
import Settings from '../../pages/Settings';
import Error from '../../pages/Error';
import GradesSummary from '../../components/Grades/GradesSummary';
import ClassPlan from '../../components/plans/ClassPlan';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { storage, db } from '../../config/fbConfig';

const StyledWrapper = styled.div`
	display: flex;
`;

const StyledHome = styled.div`
	position: relative;
	left: 25vw;
	top: 100px;
`;

const StyledLeftSide = styled.div``;

const StyledRightSide = styled.div`
	position: fixed;
	left: calc(100vw - 25vw);
`;

const StyledDesktop = styled.div`
	@media (max-width: 1124px) {
		display: none;
	}
`;
const StyledMobile = styled.div`
	display: none;

	@media (max-width: 1124px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const StyledProfile = styled.section`
	width: 50vw;
	background: #ececf0;

	.profile-wrapper {
		padding: 40px;
	}

	.profile-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		font-size: 1.125rem;
		margin: 2rem 0;

		img {
			width: 150px;
			height: 150px;
			transition: 0.2s;
			border-radius: 100px;

			&:hover {
				transform: scale(1.05);
				transition: 0.2s;
			}
		}

		h2 {
			font-size: 2rem;
			font-weight: 300;
			margin-top: 1rem;
		}

		.profile-bold {
			font-weight: 600;
		}

		.profile-school {
			margin-top: 5rem;
			margin-bottom: 1rem;
		}
	}

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
		user-select: none;
	}

	@media (max-width: 1359px) {
		padding: 12.5px;

		.profile-wrapper {
			padding: 20px;
		}
	}

	@media (max-width: 1124px) {
		width: 80%;
	}

	@media (max-width: 813px) {
		width: 100%;

		.profile-wrapper {
			padding: 10px;

			h1 {
				font-size: 1.2rem;
			}

			h2 {
				font-size: 1.2rem;
				margin: 0.5rem;
			}

			img {
				width: 100px;
				height: 100px;
			}

			.profile-bold,
			.profile-normal {
				font-size: 0.9rem;
			}
		}
	}
`;

const StyledNavbar = styled.nav`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100px;
	border-bottom: 1px solid #d2d2d2;
	position: fixed;
	background: #fff;
	z-index: 3;

	.active {
		svg {
			fill: #fe843f;
		}

		img {
			box-shadow: 0 0 0 2pt #fe843f;
		}

		&::before {
			content: '';
			width: 100px;
			height: 3px;
			background: #fe843f;
			position: absolute;
			bottom: 0;

			@media (max-width: 1359px) {
				height: 2px;
				width: 60px;
			}

			@media (max-width: 813px) {
				width: 30px;
			}
		}
	}

	.left,
	.center,
	.right {
		display: flex;
		align-items: center;
		margin: 25px;

		@media (max-width: 1359px) {
			margin: 12.5px;
		}
	}

	.left {
		text-decoration: none;

		a {
			display: flex;
		}
	}

	.left,
	.right {
		width: 25vw;
	}

	.center {
		width: 50vw;
		justify-content: space-between;
		margin: 95px;

		@media (max-width: 1124px) {
			margin: 0;
		}
	}

	.right {
		justify-content: flex-end;
	}

	.title {
		font-weight: 300;
		font-size: 2.5rem;
		margin: 25px;
		background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		user-select: none;

		@media (max-width: 1359px) {
			font-size: 2rem;
			margin: 12.5px;
		}

		@media (max-width: 1124px) {
			display: none;
		}
	}

	.box {
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent;
		transition: 0.2s;

		&:hover {
			transition: 0.2s;
			transform: scale(1.05);

			svg {
				fill: #fe843f;
			}
		}

		img {
			width: 40px;
			height: 40px;
			border-radius: 100px;

			@media (max-width: 1359px) {
				width: 30px;
				height: 30px;
			}
		}

		@media (max-width: 1359px) {
			width: 60px;
			height: 100px;
		}

		@media (max-width: 1124px) {
			width: 30px;
			height: 60px;
		}
	}

	.avatar {
		&:hover {
			img {
				box-shadow: 0 0 0 2pt #fe843f;
			}
		}
	}

	.schoolify-logo {
		transition: 0.2s;

		&:hover {
			transform: scale(1.1);
			transition: 0.2s;
		}
	}

	.box:hover::before {
		content: '';
		width: 100px;
		height: 3px;
		background: #fe843f;
		position: absolute;
		bottom: 3px;

		@media (max-width: 1359px) {
			width: 60px;
			height: 2px;
		}

		@media (max-width: 813px) {
			width: 30px;
			height: 2px;
		}
	}

	svg,
	img {
		@media (max-width: 1359px) {
			width: 30px;
			height: 30px;
		}
	}

	@media (max-width: 1124px) {
		top: 0px;
		height: 60px;
		.left,
		.right {
			width: 10vw;
		}
		.center {
			width: 80vw;
			justify-content: space-evenly;
		}
	}
`;

class SignedIn extends Component {
	state = {
		userAvatar: null,
		url: '',
		progress: 0
	};
	handleChoose = e => {
		if (e.target.files[0]) {
			const userAvatar = e.target.files[0];
			this.setState(() => ({ userAvatar }));
		}
		console.log(this.state);
	};
	handleUpload = () => {
		const { userAvatar } = this.state;
		const uploadTask = storage
			.ref(`images/users/${userAvatar.name}`)
			.put(userAvatar);
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
					.ref('images/users')
					.child(userAvatar.name)
					.getDownloadURL()
					.then(url => {
						this.setState({ url });
					});
				db.collection('users')
					.get()
					.then(snap =>
						snap.forEach(doc => {
							db.collection('users')
								.doc(doc.id)
								.update({ userAvatar: this.state.url });
							console.log(this.state.url);
						})
					);
			}
		);
		uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
			console.log('File available at', downloadURL);
		});
	};
	render() {
		const { firstName, lastName, userAvatar } = this.props.profile;
		return (
			<>
				<StyledDesktop>
					<StyledNavbar>
						<div className="left">
							<NavLink to="#">
								<Logo className="schoolify-logo" />
							</NavLink>
							<p className="title">schoolify</p>
						</div>
						<div className="center">
							<NavLink exact activeClassName="active" to="/" className="box">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M39.7799 18.252L33.7929 12.7275V3.67686H26.8963V6.36409L19.9997 0L0.220136 18.252C-0.0584876 18.5097 -0.0750394 18.9435 0.184274 19.2211C0.442897 19.498 0.879453 19.5137 1.15946 19.2567L3.44845 17.1445V40H14.483H25.5176H36.5522V17.1438L38.8412 19.2561C38.9736 19.3787 39.1426 19.439 39.3109 19.439C39.4964 19.439 39.6806 19.3657 39.8157 19.2204C40.075 18.9435 40.0585 18.5097 39.7799 18.252ZM28.2756 5.04755H32.4136V11.4548L28.2756 7.63677V5.04755ZM15.8617 38.6293V24.194C15.8617 23.8396 16.1513 23.5518 16.5079 23.5518H23.4914C23.848 23.5518 24.1376 23.8396 24.1376 24.194V38.6293H15.8617V38.6293ZM35.1722 38.6293H25.517V24.194C25.517 23.0837 24.6087 22.1811 23.4914 22.1811H16.5079C15.3906 22.1811 14.4824 23.0837 14.4824 24.194V38.6293H4.82708V15.8712L19.9997 1.8703L29.848 10.9579L33.7929 14.5978L35.1722 15.8705V38.6293V38.6293Z" />
								</svg>
							</NavLink>
							<NavLink
								activeClassName="active"
								to="/notifications"
								className="box"
							>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0)">
										<path d="M36.5484 33.7384L33.685 28.9684C32.365 26.7667 31.6666 24.2467 31.6666 21.6784V17.5C31.6666 11.0684 26.4316 5.83337 20 5.83337C13.5684 5.83337 8.33336 11.0684 8.33336 17.5V21.6784C8.33336 24.2467 7.63501 26.7667 6.31501 28.9684L3.45165 33.7384C3.29665 33.995 3.29329 34.3167 3.44001 34.5767C3.58836 34.8384 3.86665 35.0001 4.16665 35.0001H35.8333C36.1333 35.0001 36.4116 34.8384 36.5599 34.5767C36.7066 34.3166 36.7034 33.995 36.5484 33.7384ZM5.63836 33.3334L7.74336 29.825C9.22 27.365 10 24.5484 10 21.6784V17.5C10 11.985 14.485 7.50001 20 7.50001C25.515 7.50001 30 11.985 30 17.5V21.6784C30 24.5484 30.78 27.365 32.255 29.825L34.3616 33.3334H5.63836Z" />
										<path d="M20 0C18.1616 0 16.6666 1.495 16.6666 3.33336V6.66672C16.6666 7.12664 17.04 7.5 17.5 7.5C17.96 7.5 18.3334 7.12664 18.3334 6.66664V3.33336C18.3334 2.41336 19.08 1.66672 20 1.66672C20.92 1.66672 21.6666 2.41336 21.6666 3.33336V6.66672C21.6666 7.12664 22.04 7.5 22.5 7.5C22.96 7.5 23.3334 7.12664 23.3334 6.66664V3.33336C23.3334 1.495 21.8384 0 20 0Z" />
										<path d="M23.6066 33.745C23.3716 33.3484 22.8633 33.2184 22.465 33.4466C22.0666 33.68 21.9334 34.1916 22.1666 34.5883C22.3833 34.9566 22.5016 35.3983 22.5016 35.8333C22.5016 37.2116 21.38 38.3333 20.0016 38.3333C18.6233 38.3333 17.5016 37.2116 17.5016 35.8333C17.5016 35.3983 17.62 34.9566 17.8366 34.5883C18.0683 34.1899 17.935 33.6799 17.5383 33.4466C17.1366 33.2183 16.6299 33.3483 16.3966 33.745C16.0283 34.375 15.8333 35.0966 15.8333 35.8334C15.8334 38.1316 17.7016 40 20 40C22.2984 40 24.1666 38.1316 24.17 35.8334C24.17 35.0966 23.975 34.375 23.6066 33.745Z" />
									</g>
									<defs>
										<clipPath id="clip0">
											<rect width="40" height="40" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</NavLink>
							<NavLink
								activeClassName="active"
								to="/profile"
								className="box avatar"
							>
								<img src={userAvatar} alt="" />
							</NavLink>
							<NavLink activeClassName="active" to="/lessons" className="box">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M38 2.66667H33.3333V0.666667C33.3333 0.298 33.0353 0 32.6666 0H28C27.6313 0 27.3333 0.298 27.3333 0.666667V2.66667H12.6666V0.666667C12.6666 0.298 12.3686 0 12 0H7.33331C6.96465 0 6.66665 0.298 6.66665 0.666667V2.66667H1.99998C1.63131 2.66667 1.33331 2.96467 1.33331 3.33333V10.6667V39.3333C1.33331 39.702 1.63131 40 1.99998 40H38C38.3686 40 38.6666 39.702 38.6666 39.3333V10.6667V3.33333C38.6666 2.96467 38.3686 2.66667 38 2.66667ZM28.6666 1.33333H32V3.33333V5.33333H28.6666V3.33333V1.33333ZM7.99998 1.33333H11.3333V3.33333V5.33333H7.99998V3.33333V1.33333ZM2.66665 4H6.66665V6C6.66665 6.36867 6.96465 6.66667 7.33331 6.66667H12C12.3686 6.66667 12.6666 6.36867 12.6666 6V4H27.3333V6C27.3333 6.36867 27.6313 6.66667 28 6.66667H32.6666C33.0353 6.66667 33.3333 6.36867 33.3333 6V4H37.3333V10H2.66665V4ZM2.66665 38.6667V11.3333H37.3333V38.6667H2.66665Z" />
									<path d="M25.3333 15.3333H20.6666H19.3333H14.6666H13.3333H7.33331V21.3333V22.6666V27.3333V28.6666V34.6666H13.3333H14.6666H19.3333H20.6666H25.3333H26.6666H32.6666V28.6666V27.3333V22.6666V21.3333V15.3333H26.6666H25.3333ZM20.6666 16.6666H25.3333V21.3333H20.6666V16.6666ZM25.3333 27.3333H20.6666V22.6666H25.3333V27.3333ZM14.6666 22.6666H19.3333V27.3333H14.6666V22.6666ZM14.6666 16.6666H19.3333V21.3333H14.6666V16.6666ZM8.66665 16.6666H13.3333V21.3333H8.66665V16.6666ZM8.66665 22.6666H13.3333V27.3333H8.66665V22.6666ZM13.3333 33.3333H8.66665V28.6666H13.3333V33.3333ZM19.3333 33.3333H14.6666V28.6666H19.3333V33.3333ZM25.3333 33.3333H20.6666V28.6666H25.3333V33.3333ZM31.3333 33.3333H26.6666V28.6666H31.3333V33.3333ZM31.3333 27.3333H26.6666V22.6666H31.3333V27.3333ZM31.3333 16.6666V21.3333H26.6666V16.6666H31.3333Z" />
								</svg>
							</NavLink>
							<NavLink activeClassName="active" to="/chat" className="box">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M34.1666 0H10.8334C7.61664 0 5 2.61664 5 5.83336V20.8334C5 24.05 7.61664 26.6667 10.8334 26.6667H25.4884L33.5767 34.7567C33.7367 34.9151 33.9501 35.0001 34.1667 35.0001C34.2734 35.0001 34.3817 34.9784 34.4851 34.9367C34.7967 34.8084 35.0001 34.5034 35.0001 34.1667V26.6084C37.8234 26.2017 40.0001 23.7667 40.0001 20.8334V5.83336C40 2.61664 37.3834 0 34.1666 0ZM38.3334 20.8334C38.3334 23.1317 36.4634 25 34.1667 25C33.7067 25 33.3334 25.3734 33.3334 25.8334V32.155L26.4234 25.2434C26.2667 25.0884 26.055 25 25.8334 25H10.8334C8.53672 25 6.66672 23.1316 6.66672 20.8334V5.83336C6.66672 3.535 8.53672 1.66672 10.8334 1.66672H34.1667C36.4634 1.66672 38.3334 3.53508 38.3334 5.83336V20.8334V20.8334Z" />
									<path d="M26.12 30H14.1666C13.945 30 13.7333 30.0883 13.5766 30.245L6.66664 37.155V30.8333C6.66664 30.3733 6.29328 30 5.83328 30C3.53664 30 1.66664 28.1316 1.66664 25.8333V10.8333C1.66664 9.64999 2.17164 8.51671 3.055 7.72999C3.39836 7.42163 3.42664 6.89499 3.12 6.55335C2.81164 6.20999 2.28836 6.17999 1.94336 6.48671C0.708359 7.59163 0 9.17663 0 10.8333V25.8333C0 28.7667 2.17664 31.2017 5 31.6083V39.1667C5 39.5033 5.20336 39.8083 5.515 39.9367C5.61836 39.9783 5.72664 40.0001 5.83336 40.0001C6.05 40.0001 6.26336 39.9151 6.42172 39.7567L14.5117 31.6667H26.1201C26.5801 31.6667 26.9534 31.2933 26.9534 30.8333C26.9534 30.3733 26.58 30 26.12 30Z" />
									<defs>
										<clipPath id="clip0">
											<rect width="40" height="40" />
										</clipPath>
									</defs>
								</svg>
							</NavLink>
						</div>
						<div className="right">
							<NavLink activeClassName="active" to="/settings" className="box">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M37.9407 15.5556H34.1985C33.597 15.5556 33.1015 15.2244 32.8711 14.6689C32.6407 14.1133 32.7578 13.5281 33.1822 13.103L35.8281 10.4578C36.217 10.0689 36.4311 9.55111 36.4311 9.00148C36.4311 8.45111 36.217 7.93407 35.8281 7.54444L32.4556 4.17185C31.6778 3.39407 30.3215 3.39259 29.5422 4.17185L26.897 6.81704C26.4719 7.24148 25.8852 7.36 25.3311 7.12889C24.7756 6.89852 24.4444 6.40296 24.4444 5.80148V2.05926C24.4444 0.923704 23.5207 0 22.3852 0H17.6148C16.4793 0 15.5556 0.923704 15.5556 2.05926V5.80148C15.5556 6.40296 15.2244 6.89852 14.6689 7.12889C14.1148 7.36074 13.5281 7.24148 13.103 6.81704L10.4578 4.17185C9.67852 3.39259 8.32222 3.39407 7.54444 4.17185L4.17185 7.54444C3.78296 7.93333 3.56889 8.45111 3.56889 9.00148C3.56889 9.55111 3.78296 10.0681 4.17185 10.4578L6.81778 13.103C7.24222 13.5281 7.35852 14.1133 7.12889 14.6689C6.89926 15.2244 6.40296 15.5556 5.80148 15.5556H2.05926C0.923704 15.5556 0 16.4793 0 17.6148V22.3844C0 23.5207 0.923704 24.4444 2.05926 24.4444H5.80148C6.40296 24.4444 6.89852 24.7756 7.12889 25.3311C7.35926 25.8867 7.24222 26.4719 6.81778 26.897L4.17185 29.5422C3.78296 29.9311 3.56889 30.4489 3.56889 30.9985C3.56889 31.5489 3.78296 32.0659 4.17185 32.4556L7.54444 35.8281C8.32296 36.6067 9.67852 36.6081 10.4578 35.8281L13.103 33.1822C13.5281 32.7578 14.1126 32.6407 14.6689 32.8711C15.2244 33.1015 15.5556 33.597 15.5556 34.1985V37.9407C15.5556 39.0763 16.4793 40 17.6148 40H22.3844C23.52 40 24.4437 39.0763 24.4437 37.9407V34.1985C24.4437 33.597 24.7748 33.1015 25.3304 32.8711C25.8867 32.64 26.4711 32.7578 26.8963 33.1822L29.5415 35.8281C30.3207 36.6074 31.677 36.6059 32.4548 35.8281L35.8274 32.4556C36.2163 32.0667 36.4304 31.5489 36.4304 30.9985C36.4304 30.4489 36.2163 29.9319 35.8274 29.5422L33.1815 26.897C32.757 26.4719 32.6407 25.8867 32.8704 25.3311C33.1 24.7756 33.597 24.4444 34.1985 24.4444H37.9407C39.0763 24.4444 40 23.5207 40 22.3852V17.6148C40 16.4793 39.0763 15.5556 37.9407 15.5556ZM38.5185 22.3852C38.5185 22.7037 38.2593 22.963 37.9407 22.963H34.1985C32.9956 22.963 31.9622 23.6533 31.5022 24.7644C31.0415 25.8756 31.2837 27.0948 32.1348 27.9452L34.7807 30.5904C35.0067 30.8163 35.0067 31.183 34.7807 31.4081L31.4081 34.7807C31.183 35.0059 30.8163 35.0074 30.5904 34.7807L27.9452 32.1348C27.0941 31.2837 25.8756 31.043 24.7644 31.5022C23.6533 31.9622 22.963 32.9956 22.963 34.1985V37.9407C22.963 38.2593 22.7037 38.5185 22.3852 38.5185H17.6148C17.2963 38.5185 17.037 38.2593 17.037 37.9407V34.1985C17.037 32.9956 16.3467 31.9622 15.2356 31.5022C14.863 31.3474 14.4793 31.2719 14.1 31.2719C13.3489 31.2719 12.6207 31.5681 12.0548 32.1341L9.40963 34.78C9.18296 35.0067 8.8163 35.0052 8.59185 34.78L5.21926 31.4074C4.99333 31.1815 4.99333 30.8148 5.21926 30.5896L7.86518 27.9444C8.71556 27.0941 8.95852 25.8748 8.49778 24.7637C8.03778 23.6533 7.00444 22.963 5.80148 22.963H2.05926C1.74074 22.963 1.48148 22.7037 1.48148 22.3852V17.6148C1.48148 17.2963 1.74074 17.037 2.05926 17.037H5.80148C7.00444 17.037 8.03778 16.3467 8.49778 15.2356C8.95852 14.1244 8.7163 12.9052 7.86518 12.0548L5.21926 9.40963C4.99333 9.1837 4.99333 8.81704 5.21926 8.59185L8.59185 5.21926C8.81704 4.99333 9.1837 4.99333 9.40963 5.21926L12.0548 7.86444C12.9044 8.71407 14.123 8.95778 15.2356 8.49704C16.3467 8.03778 17.037 7.00444 17.037 5.80148V2.05926C17.037 1.74074 17.2963 1.48148 17.6148 1.48148H22.3844C22.7037 1.48148 22.963 1.74074 22.963 2.05926V5.80148C22.963 7.00444 23.6533 8.03778 24.7644 8.49778C25.877 8.95852 27.0948 8.71556 27.9452 7.86518L30.5904 5.22C30.817 4.99407 31.1837 4.99407 31.4081 5.22L34.7807 8.59259C35.0067 8.81852 35.0067 9.18519 34.7807 9.41037L32.1348 12.0556C31.2844 12.9059 31.0415 14.1252 31.5022 15.2363C31.9622 16.3474 32.9956 17.0378 34.1985 17.0378H37.9407C38.2593 17.037 38.5185 17.2963 38.5185 17.6148V22.3852Z" />
									<path d="M20 13.3333C16.3237 13.3333 13.3333 16.3237 13.3333 20C13.3333 23.6763 16.3237 26.6667 20 26.6667C23.6763 26.6667 26.6667 23.6763 26.6667 20C26.6667 16.3237 23.6763 13.3333 20 13.3333ZM20 25.1852C17.1415 25.1852 14.8148 22.8585 14.8148 20C14.8148 17.1415 17.1415 14.8148 20 14.8148C22.8585 14.8148 25.1852 17.1415 25.1852 20C25.1852 22.8585 22.8585 25.1852 20 25.1852Z" />
								</svg>
							</NavLink>
						</div>
					</StyledNavbar>
					<StyledWrapper>
						<StyledLeftSide>
							<Reminders />
							<Grades />
						</StyledLeftSide>
						<StyledHome>
							<Switch>
								<Route exact path="/" component={News} />
								<Route path="/notifications" component={Notification} />
								<Route path="/profile">
									<StyledProfile>
										<div className="profile-wrapper">
											<h1>Profile</h1>
											<div className="profile-container">
												<img src={userAvatar} alt="" />
												<h2>
													{firstName} {lastName}
												</h2>
												<progress value={this.state.progress} max="100" />
												<input type="file" onChange={this.handleChoose} />
												<button onClick={this.handleUpload}>
													Change your avatar!
												</button>
												<div className="profile-school">
													<p className="profile-bold">School:</p>
													<p className="profile-normal">
														Lorem ipsum dolor sit amet consectetur.
													</p>
												</div>
												<div className="profile-class">
													<p className="profile-bold">Class:</p>
													<p className="profile-normal">Lorem, ipsum.</p>
												</div>
											</div>
										</div>
									</StyledProfile>
								</Route>
								<Route path="/lessons" component={Lessons} />
								<Route path="/chat" component={Chat} />
								<Route path="/create" component={CreatePost} />
								<Route path="/add" component={CreateSchool} />
								<Route path="/school-list" component={ViewSchools} />
								<Route path="/add-grade" component={AddGrades} />
								<Route path="/grade" component={GradesSummary} />
								<Route path="/lessons-zsz" component={ClassPlan} />
								<Route path="/settings" component={Settings} />
								<Route component={Error} />
							</Switch>
						</StyledHome>
						<StyledRightSide>
							<Homework />
							<Tests />
						</StyledRightSide>
					</StyledWrapper>
				</StyledDesktop>
				<StyledMobile>
					<StyledNavbar>
						<div className="left">
							<NavLink to="#">
								<Logo className="schoolify-logo" />
							</NavLink>
							<p className="title">schoolify</p>
						</div>
						<div className="center">
							<NavLink exact activeClassName="active" to="/" className="box">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M39.7799 18.252L33.7929 12.7275V3.67686H26.8963V6.36409L19.9997 0L0.220136 18.252C-0.0584876 18.5097 -0.0750394 18.9435 0.184274 19.2211C0.442897 19.498 0.879453 19.5137 1.15946 19.2567L3.44845 17.1445V40H14.483H25.5176H36.5522V17.1438L38.8412 19.2561C38.9736 19.3787 39.1426 19.439 39.3109 19.439C39.4964 19.439 39.6806 19.3657 39.8157 19.2204C40.075 18.9435 40.0585 18.5097 39.7799 18.252ZM28.2756 5.04755H32.4136V11.4548L28.2756 7.63677V5.04755ZM15.8617 38.6293V24.194C15.8617 23.8396 16.1513 23.5518 16.5079 23.5518H23.4914C23.848 23.5518 24.1376 23.8396 24.1376 24.194V38.6293H15.8617V38.6293ZM35.1722 38.6293H25.517V24.194C25.517 23.0837 24.6087 22.1811 23.4914 22.1811H16.5079C15.3906 22.1811 14.4824 23.0837 14.4824 24.194V38.6293H4.82708V15.8712L19.9997 1.8703L29.848 10.9579L33.7929 14.5978L35.1722 15.8705V38.6293V38.6293Z" />
								</svg>
							</NavLink>
							<NavLink
								activeClassName="active"
								to="/notifications"
								className="box"
							>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0)">
										<path d="M36.5484 33.7384L33.685 28.9684C32.365 26.7667 31.6666 24.2467 31.6666 21.6784V17.5C31.6666 11.0684 26.4316 5.83337 20 5.83337C13.5684 5.83337 8.33336 11.0684 8.33336 17.5V21.6784C8.33336 24.2467 7.63501 26.7667 6.31501 28.9684L3.45165 33.7384C3.29665 33.995 3.29329 34.3167 3.44001 34.5767C3.58836 34.8384 3.86665 35.0001 4.16665 35.0001H35.8333C36.1333 35.0001 36.4116 34.8384 36.5599 34.5767C36.7066 34.3166 36.7034 33.995 36.5484 33.7384ZM5.63836 33.3334L7.74336 29.825C9.22 27.365 10 24.5484 10 21.6784V17.5C10 11.985 14.485 7.50001 20 7.50001C25.515 7.50001 30 11.985 30 17.5V21.6784C30 24.5484 30.78 27.365 32.255 29.825L34.3616 33.3334H5.63836Z" />
										<path d="M20 0C18.1616 0 16.6666 1.495 16.6666 3.33336V6.66672C16.6666 7.12664 17.04 7.5 17.5 7.5C17.96 7.5 18.3334 7.12664 18.3334 6.66664V3.33336C18.3334 2.41336 19.08 1.66672 20 1.66672C20.92 1.66672 21.6666 2.41336 21.6666 3.33336V6.66672C21.6666 7.12664 22.04 7.5 22.5 7.5C22.96 7.5 23.3334 7.12664 23.3334 6.66664V3.33336C23.3334 1.495 21.8384 0 20 0Z" />
										<path d="M23.6066 33.745C23.3716 33.3484 22.8633 33.2184 22.465 33.4466C22.0666 33.68 21.9334 34.1916 22.1666 34.5883C22.3833 34.9566 22.5016 35.3983 22.5016 35.8333C22.5016 37.2116 21.38 38.3333 20.0016 38.3333C18.6233 38.3333 17.5016 37.2116 17.5016 35.8333C17.5016 35.3983 17.62 34.9566 17.8366 34.5883C18.0683 34.1899 17.935 33.6799 17.5383 33.4466C17.1366 33.2183 16.6299 33.3483 16.3966 33.745C16.0283 34.375 15.8333 35.0966 15.8333 35.8334C15.8334 38.1316 17.7016 40 20 40C22.2984 40 24.1666 38.1316 24.17 35.8334C24.17 35.0966 23.975 34.375 23.6066 33.745Z" />
									</g>
									<defs>
										<clipPath id="clip0">
											<rect width="40" height="40" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</NavLink>
							<NavLink
								activeClassName="active"
								to="/profile"
								className="box avatar"
							>
								<img src={userAvatar} alt="" />
							</NavLink>
							<NavLink activeClassName="active" to="/lessons" className="box">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M38 2.66667H33.3333V0.666667C33.3333 0.298 33.0353 0 32.6666 0H28C27.6313 0 27.3333 0.298 27.3333 0.666667V2.66667H12.6666V0.666667C12.6666 0.298 12.3686 0 12 0H7.33331C6.96465 0 6.66665 0.298 6.66665 0.666667V2.66667H1.99998C1.63131 2.66667 1.33331 2.96467 1.33331 3.33333V10.6667V39.3333C1.33331 39.702 1.63131 40 1.99998 40H38C38.3686 40 38.6666 39.702 38.6666 39.3333V10.6667V3.33333C38.6666 2.96467 38.3686 2.66667 38 2.66667ZM28.6666 1.33333H32V3.33333V5.33333H28.6666V3.33333V1.33333ZM7.99998 1.33333H11.3333V3.33333V5.33333H7.99998V3.33333V1.33333ZM2.66665 4H6.66665V6C6.66665 6.36867 6.96465 6.66667 7.33331 6.66667H12C12.3686 6.66667 12.6666 6.36867 12.6666 6V4H27.3333V6C27.3333 6.36867 27.6313 6.66667 28 6.66667H32.6666C33.0353 6.66667 33.3333 6.36867 33.3333 6V4H37.3333V10H2.66665V4ZM2.66665 38.6667V11.3333H37.3333V38.6667H2.66665Z" />
									<path d="M25.3333 15.3333H20.6666H19.3333H14.6666H13.3333H7.33331V21.3333V22.6666V27.3333V28.6666V34.6666H13.3333H14.6666H19.3333H20.6666H25.3333H26.6666H32.6666V28.6666V27.3333V22.6666V21.3333V15.3333H26.6666H25.3333ZM20.6666 16.6666H25.3333V21.3333H20.6666V16.6666ZM25.3333 27.3333H20.6666V22.6666H25.3333V27.3333ZM14.6666 22.6666H19.3333V27.3333H14.6666V22.6666ZM14.6666 16.6666H19.3333V21.3333H14.6666V16.6666ZM8.66665 16.6666H13.3333V21.3333H8.66665V16.6666ZM8.66665 22.6666H13.3333V27.3333H8.66665V22.6666ZM13.3333 33.3333H8.66665V28.6666H13.3333V33.3333ZM19.3333 33.3333H14.6666V28.6666H19.3333V33.3333ZM25.3333 33.3333H20.6666V28.6666H25.3333V33.3333ZM31.3333 33.3333H26.6666V28.6666H31.3333V33.3333ZM31.3333 27.3333H26.6666V22.6666H31.3333V27.3333ZM31.3333 16.6666V21.3333H26.6666V16.6666H31.3333Z" />
								</svg>
							</NavLink>
							<NavLink activeClassName="active" to="/chat" className="box">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M34.1666 0H10.8334C7.61664 0 5 2.61664 5 5.83336V20.8334C5 24.05 7.61664 26.6667 10.8334 26.6667H25.4884L33.5767 34.7567C33.7367 34.9151 33.9501 35.0001 34.1667 35.0001C34.2734 35.0001 34.3817 34.9784 34.4851 34.9367C34.7967 34.8084 35.0001 34.5034 35.0001 34.1667V26.6084C37.8234 26.2017 40.0001 23.7667 40.0001 20.8334V5.83336C40 2.61664 37.3834 0 34.1666 0ZM38.3334 20.8334C38.3334 23.1317 36.4634 25 34.1667 25C33.7067 25 33.3334 25.3734 33.3334 25.8334V32.155L26.4234 25.2434C26.2667 25.0884 26.055 25 25.8334 25H10.8334C8.53672 25 6.66672 23.1316 6.66672 20.8334V5.83336C6.66672 3.535 8.53672 1.66672 10.8334 1.66672H34.1667C36.4634 1.66672 38.3334 3.53508 38.3334 5.83336V20.8334V20.8334Z" />
									<path d="M26.12 30H14.1666C13.945 30 13.7333 30.0883 13.5766 30.245L6.66664 37.155V30.8333C6.66664 30.3733 6.29328 30 5.83328 30C3.53664 30 1.66664 28.1316 1.66664 25.8333V10.8333C1.66664 9.64999 2.17164 8.51671 3.055 7.72999C3.39836 7.42163 3.42664 6.89499 3.12 6.55335C2.81164 6.20999 2.28836 6.17999 1.94336 6.48671C0.708359 7.59163 0 9.17663 0 10.8333V25.8333C0 28.7667 2.17664 31.2017 5 31.6083V39.1667C5 39.5033 5.20336 39.8083 5.515 39.9367C5.61836 39.9783 5.72664 40.0001 5.83336 40.0001C6.05 40.0001 6.26336 39.9151 6.42172 39.7567L14.5117 31.6667H26.1201C26.5801 31.6667 26.9534 31.2933 26.9534 30.8333C26.9534 30.3733 26.58 30 26.12 30Z" />
									<defs>
										<clipPath id="clip0">
											<rect width="40" height="40" />
										</clipPath>
									</defs>
								</svg>
							</NavLink>
						</div>
						<div className="right">
							<NavLink activeClassName="active" to="/settings" className="box">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M37.9407 15.5556H34.1985C33.597 15.5556 33.1015 15.2244 32.8711 14.6689C32.6407 14.1133 32.7578 13.5281 33.1822 13.103L35.8281 10.4578C36.217 10.0689 36.4311 9.55111 36.4311 9.00148C36.4311 8.45111 36.217 7.93407 35.8281 7.54444L32.4556 4.17185C31.6778 3.39407 30.3215 3.39259 29.5422 4.17185L26.897 6.81704C26.4719 7.24148 25.8852 7.36 25.3311 7.12889C24.7756 6.89852 24.4444 6.40296 24.4444 5.80148V2.05926C24.4444 0.923704 23.5207 0 22.3852 0H17.6148C16.4793 0 15.5556 0.923704 15.5556 2.05926V5.80148C15.5556 6.40296 15.2244 6.89852 14.6689 7.12889C14.1148 7.36074 13.5281 7.24148 13.103 6.81704L10.4578 4.17185C9.67852 3.39259 8.32222 3.39407 7.54444 4.17185L4.17185 7.54444C3.78296 7.93333 3.56889 8.45111 3.56889 9.00148C3.56889 9.55111 3.78296 10.0681 4.17185 10.4578L6.81778 13.103C7.24222 13.5281 7.35852 14.1133 7.12889 14.6689C6.89926 15.2244 6.40296 15.5556 5.80148 15.5556H2.05926C0.923704 15.5556 0 16.4793 0 17.6148V22.3844C0 23.5207 0.923704 24.4444 2.05926 24.4444H5.80148C6.40296 24.4444 6.89852 24.7756 7.12889 25.3311C7.35926 25.8867 7.24222 26.4719 6.81778 26.897L4.17185 29.5422C3.78296 29.9311 3.56889 30.4489 3.56889 30.9985C3.56889 31.5489 3.78296 32.0659 4.17185 32.4556L7.54444 35.8281C8.32296 36.6067 9.67852 36.6081 10.4578 35.8281L13.103 33.1822C13.5281 32.7578 14.1126 32.6407 14.6689 32.8711C15.2244 33.1015 15.5556 33.597 15.5556 34.1985V37.9407C15.5556 39.0763 16.4793 40 17.6148 40H22.3844C23.52 40 24.4437 39.0763 24.4437 37.9407V34.1985C24.4437 33.597 24.7748 33.1015 25.3304 32.8711C25.8867 32.64 26.4711 32.7578 26.8963 33.1822L29.5415 35.8281C30.3207 36.6074 31.677 36.6059 32.4548 35.8281L35.8274 32.4556C36.2163 32.0667 36.4304 31.5489 36.4304 30.9985C36.4304 30.4489 36.2163 29.9319 35.8274 29.5422L33.1815 26.897C32.757 26.4719 32.6407 25.8867 32.8704 25.3311C33.1 24.7756 33.597 24.4444 34.1985 24.4444H37.9407C39.0763 24.4444 40 23.5207 40 22.3852V17.6148C40 16.4793 39.0763 15.5556 37.9407 15.5556ZM38.5185 22.3852C38.5185 22.7037 38.2593 22.963 37.9407 22.963H34.1985C32.9956 22.963 31.9622 23.6533 31.5022 24.7644C31.0415 25.8756 31.2837 27.0948 32.1348 27.9452L34.7807 30.5904C35.0067 30.8163 35.0067 31.183 34.7807 31.4081L31.4081 34.7807C31.183 35.0059 30.8163 35.0074 30.5904 34.7807L27.9452 32.1348C27.0941 31.2837 25.8756 31.043 24.7644 31.5022C23.6533 31.9622 22.963 32.9956 22.963 34.1985V37.9407C22.963 38.2593 22.7037 38.5185 22.3852 38.5185H17.6148C17.2963 38.5185 17.037 38.2593 17.037 37.9407V34.1985C17.037 32.9956 16.3467 31.9622 15.2356 31.5022C14.863 31.3474 14.4793 31.2719 14.1 31.2719C13.3489 31.2719 12.6207 31.5681 12.0548 32.1341L9.40963 34.78C9.18296 35.0067 8.8163 35.0052 8.59185 34.78L5.21926 31.4074C4.99333 31.1815 4.99333 30.8148 5.21926 30.5896L7.86518 27.9444C8.71556 27.0941 8.95852 25.8748 8.49778 24.7637C8.03778 23.6533 7.00444 22.963 5.80148 22.963H2.05926C1.74074 22.963 1.48148 22.7037 1.48148 22.3852V17.6148C1.48148 17.2963 1.74074 17.037 2.05926 17.037H5.80148C7.00444 17.037 8.03778 16.3467 8.49778 15.2356C8.95852 14.1244 8.7163 12.9052 7.86518 12.0548L5.21926 9.40963C4.99333 9.1837 4.99333 8.81704 5.21926 8.59185L8.59185 5.21926C8.81704 4.99333 9.1837 4.99333 9.40963 5.21926L12.0548 7.86444C12.9044 8.71407 14.123 8.95778 15.2356 8.49704C16.3467 8.03778 17.037 7.00444 17.037 5.80148V2.05926C17.037 1.74074 17.2963 1.48148 17.6148 1.48148H22.3844C22.7037 1.48148 22.963 1.74074 22.963 2.05926V5.80148C22.963 7.00444 23.6533 8.03778 24.7644 8.49778C25.877 8.95852 27.0948 8.71556 27.9452 7.86518L30.5904 5.22C30.817 4.99407 31.1837 4.99407 31.4081 5.22L34.7807 8.59259C35.0067 8.81852 35.0067 9.18519 34.7807 9.41037L32.1348 12.0556C31.2844 12.9059 31.0415 14.1252 31.5022 15.2363C31.9622 16.3474 32.9956 17.0378 34.1985 17.0378H37.9407C38.2593 17.037 38.5185 17.2963 38.5185 17.6148V22.3852Z" />
									<path d="M20 13.3333C16.3237 13.3333 13.3333 16.3237 13.3333 20C13.3333 23.6763 16.3237 26.6667 20 26.6667C23.6763 26.6667 26.6667 23.6763 26.6667 20C26.6667 16.3237 23.6763 13.3333 20 13.3333ZM20 25.1852C17.1415 25.1852 14.8148 22.8585 14.8148 20C14.8148 17.1415 17.1415 14.8148 20 14.8148C22.8585 14.8148 25.1852 17.1415 25.1852 20C25.1852 22.8585 22.8585 25.1852 20 25.1852Z" />
								</svg>
							</NavLink>
						</div>
					</StyledNavbar>
					<Reminders />
					<Homework />
					<Tests />
					<Grades />
					<Switch>
						<Route exact path="/" component={News} />
						<Route path="/notifications" component={Notification} />
						<Route path="/profile">
							<StyledProfile>
								<div className="profile-wrapper">
									<h1>Profile</h1>
									<div className="profile-container">
										<img src={userAvatar} alt="" />
										<h2>
											{firstName} {lastName}
										</h2>
										<input type="file" onChange={this.handleChoose} />
										<button onClick={this.handleUpload}>
											Change your avatar!
										</button>
										<div className="profile-school">
											<p className="profile-bold">School:</p>
											<p className="profile-normal">
												Lorem ipsum dolor sit amet consectetur.
											</p>
										</div>
										<div className="profile-class">
											<p className="profile-bold">Class:</p>
											<p className="profile-normal">Lorem, ipsum.</p>
										</div>
									</div>
								</div>
							</StyledProfile>
						</Route>
						<Route path="/lessons" component={Lessons} />
						<Route path="/chat" component={Chat} />
						<Route path="/create" component={CreatePost} />
						<Route path="/add" component={CreateSchool} />
						<Route path="/school-list" component={ViewSchools} />
						<Route path="/add-grade" component={AddGrades} />
						<Route path="/grade" component={GradesSummary} />
						<Route path="/lessons-zsz" component={ClassPlan} />
						<Route path="/settings" component={Settings} />
						<Route component={Error} />
					</Switch>
				</StyledMobile>
			</>
		);
	}
}

export default SignedIn;
