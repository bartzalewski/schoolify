import React from 'react';
import styled from 'styled-components';
import github from '../images/github-logo.svg';
import bartzalewski from '../images/my-avatar.svg';
import linkedin from '../images/linkedin-logo.svg';

const StyledContact = styled.section`
	width: 50vw;
	background: #ececf0;

	.container {
		padding: 40px;

		.wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 2rem;

			.box {
				background: #fff;
				border-radius: 15px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 14vw;
				padding: 1rem;
				transition: 0.2s;

				&:hover {
					transform: scale(1.05);
					transition: 0.2s;
				}

				img {
					width: 100%;
					height: 20vh;
				}

				a {
					text-decoration: none;
					margin-top: 2rem;
					color: inherit;
				}
			}
		}
	}

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
		user-select: none;
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

		.wrapper {
			display: flex;
			flex-direction: column;

			.box {
				margin-top: 1rem;
				width: 100% !important;
			}
		}
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
				<div className="wrapper">
					<div className="box">
						<img src={github} alt="github logo" />
						<a
							href="https://github.com/bartzalewski/schoolify"
							target="_blank"
							rel="noopener noreferrer"
						>
							This repository
						</a>
					</div>
					<div className="box">
						<img src={bartzalewski} alt="my logo" />
						<a
							href="https://bartzalewski.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							My website
						</a>
					</div>
					<div className="box">
						<img src={linkedin} alt="linkedin logo" />
						<a
							href="https://www.linkedin.com/in/bartzalewski"
							target="_blank"
							rel="noopener noreferrer"
						>
							My LinkedIn
						</a>
					</div>
				</div>
			</div>
		</StyledContact>
	);
};

export default Contact;
