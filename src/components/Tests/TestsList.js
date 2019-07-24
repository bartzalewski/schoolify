import React from 'react';
import styled from 'styled-components';

const StyledTestsList = styled.div`
	background: #f44336;
	color: #fff;
	border-radius: 10px;
	padding: 5px 15px;
	margin-top: 5px;
	width: fit-content;

	@media (max-width: 1359px) {
		padding: 2.5px 10px;
	}

	@media (max-width: 1124px) {
		margin: 5px auto;
	}
`;

const TestsList = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<StyledTestsList key={todo.id}>
					<span
						onClick={() => {
							deleteTodo(todo.id);
						}}
					>
						{todo.content}
					</span>
				</StyledTestsList>
			);
		})
	) : (
		<p className="center">You have no tests.</p>
	);
	return <div className="tests-list">{todoList}</div>;
};
export default TestsList;
