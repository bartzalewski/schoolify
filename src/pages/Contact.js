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

			.box {
				background: #fff;
				border-radius: 15px;

				img {
					width: 10vw;
				}
			}
		}
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
				<div className="wrapper">
					<div className="box">
						<img src={github} alt="github logo" />
					</div>
					<div className="box">
						<img src={bartzalewski} alt="my logo" />
					</div>
					<div className="box">
						<img src={linkedin} alt="linkedin logo" />
					</div>
				</div>
			</div>
		</StyledContact>
	);
};

export default Contact;
