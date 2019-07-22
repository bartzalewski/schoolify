import React from 'react';
import styled from 'styled-components';

const StyledError = styled.section`
	width: 50vw;
	height: 89.2vh;
	background: #ececf0;

	h1 {
		padding: 40px;
		font-size: 1.625rem;
		font-weight: 600;
	}
`;

const Error = () => {
	return (
		<StyledError>
			<h1>404 not found</h1>
		</StyledError>
	);
};

export default Error;
