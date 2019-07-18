import React from 'react';
import styled from 'styled-components';

const StyledHomeworkList = styled.div`
	color: #fff;
	border-radius: 10px;
	padding: 5px 15px;
`;

const HomeworkList = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<StyledHomeworkList key={todo.id}>
					<span
						onClick={() => {
							deleteTodo(todo.id);
						}}
					>
						{todo.content}
					</span>
				</StyledHomeworkList>
			);
		})
	) : (
		<p style={{ color: 'white', padding: '5px 15px' }}>You have no homework.</p>
	);
	return <div className="homework-list">{todoList}</div>;
};
export default HomeworkList;
