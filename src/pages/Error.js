import React from 'react';
import styled from 'styled-components';

const StyledError = styled.section`
	width: 50vw;
	background: #ececf0;

	.container {
		padding: 40px;
	}

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
	}

	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 2rem;
		text-align: center;
		background: #fff;
		border-radius: 15px;
		padding: 15px 25px;

		p:nth-of-type(2) {
			margin-top: 1rem;
		}

		a {
			text-decoration: none;
			background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			font-weight: bold;
		}
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

const Error = () => {
	return (
		<StyledError>
			<div className="container">
				<h1>404 not found</h1>
				<div class="flex">
					<p>
						If you found this page, it can mean that it is not yet supported or
						you've entered the invalid URL. Please keep in mind that this is
						still not completed project.
					</p>
					<p>
						If you have any questions, simply contact with me{' '}
						<a href="mailto:me@bartzalewski.com">here</a>.
					</p>
				</div>
			</div>
		</StyledError>
	);
};

export default Error;
