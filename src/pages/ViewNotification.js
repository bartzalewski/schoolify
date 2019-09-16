import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledNotification = styled.section`
	width: 50vw;
	background: #ececf0;

	.container {
		padding: 40px;
	}

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
		user-select: none;
	}

	ul {
		list-style-type: none;
		margin: 2rem 0;
	}

	li {
		background: white;
		border-radius: 15px;
		margin-top: 0.5rem;
		padding: 15px 25px;
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}

	.notification-user {
		background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 600;
	}

	.notification-time {
		color: #9b9b9b;
	}

	@media (max-width: 1359px) {
		padding: 12.5px;

		.container {
			padding: 20px;
		}
	}

	@media (max-width: 1124px) {
		width: 80%;
	}

	@media (max-width: 813px) {
		width: 100%;

		.container {
			padding: 10px;
		}
	}
`;

const ViewNotification = props => {
	const { notifications } = props;
	return (
		<StyledNotification>
			<div className="container">
				<h1>Notifications</h1>
				<ul>
					{notifications &&
						notifications.map(item => {
							return (
								<li key={item.id}>
									<span className="notification-user">{item.user} </span>
									<span>{item.content}</span>
									<div className="notification-time">
										{moment(item.time.toDate()).fromNow()}
									</div>
								</li>
							);
						})}
				</ul>
			</div>
		</StyledNotification>
	);
};

export default ViewNotification;
