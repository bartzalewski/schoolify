import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Reminders from '../../components/Reminders/Reminders';
import Grades from '../../components/Grades/Grades';
import Homework from '../../components/Homework/Homework';
import Tests from '../../components/Tests/Tests';
import News from '../../pages/News';
import Notification from '../../pages/Notification.js';
import Lessons from '../../pages/Lessons.js';
import Contact from '../../pages/Contact.js';
import CreatePost from '../../components/posts/CreatePost';
import CreateSchool from '../../components/schools/CreateSchool';
import Settings from '../../pages/Settings';
import Error from '../../pages/Error';
import { ReactComponent as User } from '../../images/user.svg';

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

		svg {
			width: 150px;
			height: 150px;
		}

		h2 {
			font-size: 2rem;
			font-weight: 300;
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
		}
	}
`;

const SignedIn = props => {
	const { firstName, lastName } = props.profile;
	console.log(props);
	return (
		<>
			<StyledDesktop>
				<Navbar />
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
											<User />
											<h2>
												{firstName} {lastName}
											</h2>
											<div className="profile-school">
												<p className="profile-bold">School:</p>
												<p>Lorem ipsum dolor sit amet consectetur.</p>
											</div>
											<div className="profile-class">
												<p className="profile-bold">Class:</p>
												<p>Lorem, ipsum.</p>
											</div>
										</div>
									</div>
								</StyledProfile>
							</Route>
							<Route path="/lessons" component={Lessons} />
							<Route path="/contact" component={Contact} />
							<Route path="/create" component={CreatePost} />
							<Route path="/add" component={CreateSchool} />
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
				<Navbar />
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
									<User />
									<h2>
										{firstName} {lastName}
									</h2>
									<div className="profile-school">
										<p className="profile-bold">School:</p>
										<p>Lorem ipsum dolor sit amet consectetur.</p>
									</div>
									<div className="profile-class">
										<p className="profile-bold">Class:</p>
										<p>Lorem, ipsum.</p>
									</div>
								</div>
							</div>
						</StyledProfile>
					</Route>
					<Route path="/lessons" component={Lessons} />
					<Route path="/contact" component={Contact} />
					<Route path="/create" component={CreatePost} />
					<Route path="/add" component={CreateSchool} />
					<Route path="/settings" component={Settings} />
					<Route component={Error} />
				</Switch>
			</StyledMobile>
		</>
	);
};

export default SignedIn;