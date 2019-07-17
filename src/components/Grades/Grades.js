import React from 'react';
import styled from 'styled-components';

const StyledGrades = styled.aside`
	width: 25vw;
	height: 44.6vh;
	padding: 25px;
	border-right: 1px solid #d2d2d2;

	.title {
		font-size: 32px;
		font-weight: 600;
	}
`;

const Grades = () => {
	return (
		<StyledGrades>
			<h1 className="title">Grades</h1>
		</StyledGrades>
	);
};

export default Grades;
