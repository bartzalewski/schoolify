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

function App() {
	return (
		<>
			<Navbar />
			<StyledWrapper>
				<div>
					<Reminders />
					<Grades />
				</div>
				<Switch>
					<Route exact path="/" component={News} />
					<Route exact path="/notifications" component={Notification} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/lessons" component={Lessons} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
				<div>
					<Homework />
					<Tests />
				</div>
			</StyledWrapper>
		</>
	);
}

export default App;
