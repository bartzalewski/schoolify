import React from 'react';
import styled from 'styled-components';

const StyledNotification = styled.section`
	width: 50vw;
	background: #ececf0;

	h1 {
		padding: 40px;
		font-size: 1.625rem;
		font-weight: 600;
	}
`;

const Notification = () => {
	return (
		<StyledNotification>
			<h1>Notifications</h1>
		</StyledNotification>
	);
};

export default Notification;
