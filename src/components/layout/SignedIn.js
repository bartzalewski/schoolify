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
import ClassPlan from '../../components/lessons/ClassPlan';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import Profile from '../../pages/Profile';
import storage from 'local-storage-fallback';

const DarkTheme = createGlobalStyle`
	body, section, .school-list-page, .add-grades-page, .grades-summary-page, .zsz-page {
		background: ${props =>
			props.theme.mode === 'dark' ? '#141414' : null} !important;
		color: ${props => (props.theme.mode === 'dark' ? '#EEE' : null)};
	}

	aside, nav, .input-reminder, .input-reminder::placeholder, .input-homework, .input-homework::placeholder, .input-tests, .input-tests::placeholder, #schoolName, #schoolName::placeholder, #content, #content::placeholder, .custom-file-input::before, .btn-choose, .list-item, .friend-sent, .user-sent {
		background: ${props =>
			props.theme.mode === 'dark' ? '#1F1F1F' : null} !important;
		color: ${props => (props.theme.mode === 'dark' ? '#EEE' : null)} !important;
	}

	.posts-list, .add-post, .posts-btn, .lesson-box, .box-add, .notification-item, .add-grades-box, .box-error-page, .settings-box, .profile-container, .chat-wrapper {
		background: ${props =>
			props.theme.mode === 'dark' ? '#0a0a0a' : null} !important;
	}

	.box, .upload-pic {
		fill: ${props => (props.theme.mode === 'dark' ? '#EEE' : null)} !important;
	}
`;

const StyledWrapper = styled.div`
	display: flex;

	@media (max-width: 1124px) {
		display: block;
	}
`;

const StyledHome = styled.div`
	position: relative;
	left: 25vw;
	top: 100px;

	@media (max-width: 1359px) {
		top: 60px;
	}

	@media (max-width: 1124px) {
		position: static;
		display: flex;
		justify-content: center;
	}
`;

const StyledLeftSide = styled.div``;

const StyledRightSide = styled.div`
	position: fixed;
	left: calc(100vw - 25vw);
`;

const StyledDesktop = styled.div``;

class SignedIn extends Component {
	constructor() {
		super();
		this.state = {
			theme: Object(this.getInitialTheme())
		};
		this.getInitialTheme = this.getInitialTheme.bind(this);
	}
	onChange = newName => {
		this.setState({
			theme: { mode: `${newName}` }
		});
	};
	getInitialTheme = () => {
		const savedTheme = storage.getItem('theme');
		return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' };
	};
	componentDidMount() {
		storage.setItem('theme', JSON.stringify(this.state.theme));
	}
	componentDidUpdate() {
		storage.setItem('theme', JSON.stringify(this.state.theme));
	}
	render() {
		const theme = this.state.theme;
		return (
			<ThemeProvider theme={theme}>
				<>
					<DarkTheme />
					<StyledDesktop>
						<Navbar props={this.props.profile} />
						<StyledWrapper>
							<StyledLeftSide>
								<Reminders />
								{window.innerWidth <= 1124 ? <Homework /> : null}
								{window.innerWidth <= 1124 ? <Tests /> : null}
								<Grades />
							</StyledLeftSide>
							<StyledHome>
								<Switch>
									<Route exact path="/" component={News} />
									<Route path="/notifications" component={Notification} />
									<Route
										path="/profile"
										component={props => (
											<Profile {...props} props={this.props.profile} />
										)}
									></Route>
									<Route path="/lessons" component={Lessons} />
									<Route path="/chat" component={Chat} />
									<Route path="/create" component={CreatePost} />
									<Route path="/add" component={CreateSchool} />
									<Route path="/school-list" component={ViewSchools} />
									<Route path="/add-grade" component={AddGrades} />
									<Route path="/grade" component={GradesSummary} />
									<Route path="/lessons-zsz" component={ClassPlan} />
									<Route
										path="/settings"
										component={props => (
											<Settings
												{...props}
												theme={theme}
												onChange={this.onChange}
											/>
										)}
									/>
									<Route component={Error} />
								</Switch>
							</StyledHome>
							<StyledRightSide>
								{window.innerWidth > 1124 ? <Homework /> : null}
								{window.innerWidth > 1124 ? <Tests /> : null}
							</StyledRightSide>
						</StyledWrapper>
					</StyledDesktop>
				</>
			</ThemeProvider>
		);
	}
}

const mapStateToProps = state => {
	return {
		theme: state.theme
	};
};

export default connect(mapStateToProps)(SignedIn);
