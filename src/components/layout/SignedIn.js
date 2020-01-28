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
	aside, nav, #schoolName, #schoolName::placeholder, #content, #content::placeholder, .custom-file-input::before, .btn-choose, .list-item, .new-chat-title {
		background: ${props =>
			props.theme.mode === 'dark' ? '#1F1F1F' : null} !important;
		color: ${props => (props.theme.mode === 'dark' ? '#EEE' : null)} !important;
	}

	body, section, .posts-btn, .school-list-page, .add-grades-page, .grades-summary-page, .zsz-page, .input-reminder, .input-reminder::placeholder, .input-homework, .input-homework::placeholder, .input-tests, .input-tests::placeholder, .list-item-selected, .friend-sent, .user-sent, #chat-text-box, #chat-input-email, #chat-input-msg, .btn-chat-submit, .list-item:hover {
		background: ${props =>
			props.theme.mode === 'dark' ? '#141414' : null} !important;
		color: ${props => (props.theme.mode === 'dark' ? '#EEE' : null)} !important;
	}

	.posts-list, .add-post, .lesson-box, .box-add, .notification-item, .add-grades-box, .box-error-page, .settings-box, .profile-container, .chat-wrapper, .new-class-plan {
		background: ${props =>
			props.theme.mode === 'dark' ? '#1F1F1F' : null} !important;
	}

	.box, .upload-pic, .submit-message-icon {
		fill: ${props => (props.theme.mode === 'dark' ? '#EEE' : null)} !important;
	}

	.box {
		color: ${props => (props.theme.mode === 'dark' ? '#EEE' : null)} !important;

		svg {
			fill: ${props => (props.theme.mode === 'dark' ? '#EEE' : null)};
		}
	}

	nav {
		border-bottom: 1px solid ${props =>
			props.theme.mode === 'dark' ? '#000' : '#d2d2d2'} !important
	}

	.aside-reminders {
		border-right: 1px solid ${props =>
			props.theme.mode === 'dark' ? '#000' : '#d2d2d2'} !important;
		border-bottom: 1px solid ${props =>
			props.theme.mode === 'dark' ? '#000' : '#d2d2d2'} !important;
	}

	.aside-grades {
		border-right: 1px solid ${props =>
			props.theme.mode === 'dark' ? '#000' : '#d2d2d2'} !important;
	}

	.aside-homework {
		border-left: 1px solid ${props =>
			props.theme.mode === 'dark' ? '#000' : '#d2d2d2'} !important;
		border-bottom: 1px solid ${props =>
			props.theme.mode === 'dark' ? '#000' : '#d2d2d2'} !important;
	}

	.aside-tests {
		border-left: 1px solid ${props =>
			props.theme.mode === 'dark' ? '#000' : '#d2d2d2'} !important;
	}

	/* .list-item:hover {
		background: ${props =>
			props.theme.mode === 'dark' ? '#141414' : null} !important;
	} */
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
		if (this.props.profile.accountType === 'teacher') {
			return (
				<ThemeProvider theme={theme}>
					<>
						<DarkTheme />
						<StyledDesktop>
							<Navbar profile={this.props.profile} />
							<StyledWrapper>
								<StyledLeftSide>
									<Reminders profile={this.props.profile} />
									{window.innerWidth <= 1124 ? (
										<Homework profile={this.props.profile} />
									) : null}
									{window.innerWidth <= 1124 ? (
										<Tests profile={this.props.profile} />
									) : null}
									<Grades />
								</StyledLeftSide>
								<StyledHome>
									<Switch>
										<Route
											exact
											path="/"
											component={props => (
												<News {...props} profile={this.props.profile} />
											)}
										/>
										<Route path="/notifications" component={Notification} />
										<Route
											path="/profile"
											component={props => (
												<Profile {...props} profile={this.props.profile} />
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
		} else {
			return (
				<ThemeProvider theme={theme}>
					<>
						<DarkTheme />
						<StyledDesktop>
							<Navbar profile={this.props.profile} />
							<StyledWrapper>
								<StyledLeftSide>
									<Reminders profile={this.props.profile} />
									{window.innerWidth <= 1124 ? (
										<Homework profile={this.props.profile} />
									) : null}
									{window.innerWidth <= 1124 ? (
										<Tests profile={this.props.profile} />
									) : null}
									<Grades />
								</StyledLeftSide>
								<StyledHome>
									<Switch>
										<Route
											exact
											path="/"
											component={props => (
												<News {...props} profile={this.props.profile} />
											)}
										/>
										<Route path="/notifications" component={Notification} />
										<Route
											path="/profile"
											component={props => (
												<Profile {...props} profile={this.props.profile} />
											)}
										></Route>
										<Route path="/lessons" component={Lessons} />
										<Route path="/chat" component={Chat} />
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
}

const mapStateToProps = state => {
	return {
		theme: state.theme
	};
};

export default connect(mapStateToProps)(SignedIn);
