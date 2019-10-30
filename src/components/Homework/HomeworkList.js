import React from 'react';
import styled from 'styled-components';

const StyledHomeworkList = styled.div``;

const HomeworkList = ({ homework, removeHomework }) => {
	const homeworkList = homework.length ? (
		homework.map(homework => {
			return (
				<StyledHomeworkList
					className="homework-item"
					key={homework}
					onClick={removeHomework}
				>
					{homework}
				</StyledHomeworkList>
			);
		})
	) : (
		<span className="homework-item">You have no homework</span>
	);
	return <div className="homework-list">{homeworkList}</div>;
};

export default HomeworkList;
