import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Reminders from './components/Reminders/Reminders';
import Grades from './components/Grades/Grades';
import Homework from './components/Homework/Homework';
import Tests from './components/Tests/Tests';
import News from './pages/News';
import Notification from './pages/Notification.js';
import Profile from './pages/Profile.js';
import Lessons from './pages/Lessons.js';
import Contact from './pages/Contact.js';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreatePost from './components/posts/CreatePost';

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
	right: 24vw;
`;

function App() {
	return (
		<BrowserRouter>
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
						<Route path="/signin" component={SignIn} />
						<Route path="/signup" component={SignUp} />
						<Route path="/create" component={CreatePost} />
					</Switch>
				</StyledHome>
				<StyledRightSide>
					<Homework />
					<Tests />
				</StyledRightSide>
			</StyledWrapper>
		</BrowserRouter>
	);
}

export default App;
