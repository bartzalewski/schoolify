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
import Profile from '../../pages/Profile.js';
import Lessons from '../../pages/Lessons.js';
import Contact from '../../pages/Contact.js';
import CreatePost from '../../components/posts/CreatePost';
import Settings from '../../pages/Settings';
import Error from '../../pages/Error';

const StyledWrapper = styled.div`
	display: flex;
`;

const StyledHome = styled.div`
	position: relative;
	left: 25vw;
	top: 100px;
`;

const StyledRightSide = styled.div`
	position: fixed;
	right: 25vw;
`;

const SignedIn = props => {
	const { firstName, lastName } = props.profile;
	console.log(firstName, lastName);
	return (
		<>
			<Navbar />
			<StyledWrapper>
				<div>
					<Reminders />
					<Grades />
				</div>
				<StyledHome>
					<Switch>
						<Route exact path="/" component={News} />
						<Route path="/notifications" component={Notification} />
						<Route path="/profile" component={Profile} />
						<Route path="/lessons" component={Lessons} />
						<Route path="/contact" component={Contact} />
						<Route path="/create" component={CreatePost} />
						<Route path="/settings" component={Settings} />
						<Route component={Error} />
					</Switch>
				</StyledHome>
				<StyledRightSide>
					<Homework />
					<Tests />
				</StyledRightSide>
			</StyledWrapper>
		</>
	);
};

export default SignedIn;
