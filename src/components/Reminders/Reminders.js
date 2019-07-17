import React from 'react';
import styled from 'styled-components';

const StyledReminders = styled.aside`
	width: 25vw;
	height: 44.6vh;
	padding: 25px;
	border-bottom: 1px solid #d2d2d2;
	border-right: 1px solid #d2d2d2;

	.title {
		font-size: 2rem;
		font-weight: 600;
	}
`;

const Reminders = () => {
	return (
		<StyledReminders>
			<h1 className="title">Reminders</h1>
		</StyledReminders>
	);
};

export default Reminders;
