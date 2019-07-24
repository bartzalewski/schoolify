import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.section`
	width: 50vw;
	background: #ececf0;

	h1 {
		padding: 40px;
		font-size: 1.625rem;
		font-weight: 600;
	}
`;

const Contact = () => {
	return (
		<StyledContact>
			<h1>Contact</h1>
		</StyledContact>
	);
};

export default Contact;
