import React from 'react';
import styled from 'styled-components';

const StyledTests = styled.aside`
	width: 25vw;
	height: 44.6vh;
	padding: 25px;
	border-left: 1px solid #d2d2d2;

	.title {
		font-size: 2rem;
		font-weight: 600;
	}
`;

const Tests = () => {
	return (
		<StyledTests>
			<h1 className="title">Tests</h1>
		</StyledTests>
	);
};

export default Tests;
