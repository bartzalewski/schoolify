import React from 'react';
import styled from 'styled-components';

const StyledRemindersList = styled.div`
	background: #ff9800;
	color: #fff;
	border-radius: 10px;
	padding: 5px 15px;
	margin-top: 5px;
	width: fit-content;
`;

const RemindersList = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<StyledRemindersList key={todo.id}>
					<span
						onClick={() => {
							deleteTodo(todo.id);
						}}
					>
						{todo.content}
					</span>
				</StyledRemindersList>
			);
		})
	) : (
		<span>You have no reminders.</span>
	);
	return <div className="reminders-list">{todoList}</div>;
};
export default RemindersList;
