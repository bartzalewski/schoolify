import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
					</Switch>
				</StyledHome>
				<StyledRightSide>
					<Homework />
					<Tests />
				</StyledRightSide>
			</StyledWrapper>
		</>
	);
}

export default App;
