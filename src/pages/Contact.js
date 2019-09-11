import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.section`
	width: 50vw;
	background: #ececf0;

	.container {
		padding: 40px;
	}

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
	}

	p {
		margin-top: 2rem;
	}

	@media (max-width: 1359px) {
		padding: 12.5px;

		.container {
			padding: 20px;
		}
	}

	@media (max-width: 1124px) {
		width: 80%;
	}

	@media (max-width: 813px) {
		width: 100%;

		.container {
			padding: 10px;
		}
	}
`;

const Contact = () => {
	return (
		<StyledContact>
			<div className="container">
				<h1>Contact</h1>
				<p>
					Repository:{' '}
					<a
						href="https://github.com/bartzalewski/schoolify"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://github.com/bartzalewski/schoolify
					</a>
				</p>
			</div>
		</StyledContact>
	);
};

export default Contact;
