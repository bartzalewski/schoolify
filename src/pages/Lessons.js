import React from 'react';
import styled from 'styled-components';

const StyledLessons = styled.section`
	width: 50vw;
	height: 89.2vh;
	background: #ececf0;

	h1 {
		padding: 40px;
		font-size: 1.625rem;
		font-weight: 600;
	}
`;

const Lessons = () => {
	return (
		<StyledLessons>
			<h1>Lessons</h1>
		</StyledLessons>
	);
};

export default Lessons;
