import React from 'react';
import styled from 'styled-components';

const StyledRemindersList = styled.div`
	background: #ff9800;
	color: #fff;
	border-radius: 10px;
	padding: 5px 15px;
	margin-top: 5px;
	width: fit-content;
	transition: 0.2s;

	&:hover {
		transform: scale(1.05);
		transition: 0.2s;
	}

	@media (max-width: 1359px) {
		padding: 2.5px 10px;
	}

	@media (max-width: 1124px) {
		margin: 5px auto;
	}
`;

const RemindersList = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<StyledRemindersList
					key={todo.id}
					onClick={() => {
						deleteTodo(todo.id);
					}}
				>
					<span>{todo.content}</span>
				</StyledRemindersList>
			);
		})
	) : (
		<span>You have no reminders.</span>
	);
	return <div className="reminders-list">{todoList}</div>;
};
export default RemindersList;
