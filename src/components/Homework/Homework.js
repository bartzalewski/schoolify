import React from 'react';
import styled from 'styled-components';

const StyledHomework = styled.aside`
	width: 25vw;
	height: 44.6vh;
	padding: 25px;
	border-left: 1px solid #d2d2d2;
	border-bottom: 1px solid #d2d2d2;

	.title {
		font-size: 2rem;
		font-weight: 600;
	}
`;

const Homework = () => {
	return (
		<StyledHomework>
			<h1 className="title">Homework</h1>
		</StyledHomework>
	);
};

export default Homework;
