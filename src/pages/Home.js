import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/logo.svg';
import SignUp from '../components/auth/SignUp';
import SignIn from '../components/auth/SignIn';
import homebg from '../images/homebg.svg';

const StyledHome = styled.div`
	width: 100vw;
	height: 100vh;
	background: #fff;
	display: flex;
	overflow-y: hidden;

	h1 {
		font-weight: 400;
		font-size: 3rem;
		user-select: none;

		@media (max-width: 1600px) {
			font-size: 2.5rem;
		}
	}

	span,
	.title {
		background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.title {
		font-size: 2.25rem;
		font-weight: 300;
		user-select: none;
	}

	.home-bg {
		width: 100%;
		user-select: none;
	}

	.home-container {
		padding: 100px;
	}

	.signup-title,
	.signin-title {
		font-size: 1.5rem;
		font-weight: 600;
		background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	input#email,
	input#password,
	input#firstName,
	input#lastName {
		width: 100%;
		height: 50px;
		font-size: 1.125rem;
		border: none;
		border-radius: 10px;

		@media (max-width: 1600px) {
			height: 40px;
		}
	}

	input#email:focus,
	input#password:focus,
	input#firstName:focus,
	input#lastName:focus {
		outline: none;
	}

	input {
		margin-top: 10px;
	}

	input,
	button {
		user-select: text;
	}

	input:focus {
		outline: 1px solid #fe843f;
	}

	.btn {
		border-radius: 10px;
		background: -webkit-linear-gradient(left, #fe843f, #fc5a37);
		color: #fff;
		font-weight: 600;
		border: none;
		height: 50px;
		font-size: 1.125rem;
		cursor: pointer;
		padding: 10px 25px;
		margin-top: 20px;
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}

		@media (max-width: 1600px) {
			padding: 0px 25px;
		}
	}

	@media (max-width: 1124px) {
		text-align: center;
		padding: 50px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		align-items: center;

		.home-bg {
			width: 50%;
			margin-top: 5rem;
		}

		.home-logo {
			width: 50px;
			height: 50px;
		}

		.title {
			font-size: 1.8rem;
		}

		.home-container {
			padding: 0;
		}

		h1 {
			font-size: 2.3rem;
			margin-top: 5rem;

			@media (max-width: 600px) {
				font-size: 2rem;
			}
		}
	}

	@media (max-width: 600px) {
		padding: 25px;
		.home-bg {
			width: 80%;
		}
	}
`;

const StyledWrapperLeft = styled.div`
	width: 40vw;
	height: 100vh;
	background: #ececf0;
	padding: 100px;
	border-right: 1px solid #d2d2d2;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media (max-width: 1600px) {
		padding: 50px;
	}

	@media (max-width: 1124px) {
		width: 100%;
		background: white;
		border: none;
		height: fit-content;
		padding: 0;
	}
`;

const StyledHero = styled.div``;

const StyledSign = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	height: fit-content;
	width: 100%;

	@media (max-width: 1124px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const StyledWrapperRight = styled.div`
	width: 60vw;
	height: 100vh;
	background: #fff;
	padding: 100px;
	text-align: center;
	z-index: 1;

	@media (max-width: 1600px) {
		padding: 50px;
	}

	@media (max-width: 1124px) {
		width: 100%;
		z-index: 0;
		padding: 0;
	}
`;

export default function Home() {
	return (
		<StyledHome>
			<StyledWrapperLeft>
				<StyledHero>
					<h1>
						the <span>first</span> globalized electronic diary for schools.
					</h1>
				</StyledHero>
				<StyledSign>
					<SignUp />
					<SignIn />
				</StyledSign>
			</StyledWrapperLeft>
			<StyledWrapperRight>
				<Logo className="home-logo" />
				<div className="title">schoolify</div>
				<div className="home-container">
					<img className="home-bg" src={homebg} alt="home background" />
				</div>
			</StyledWrapperRight>
		</StyledHome>
	);
}
