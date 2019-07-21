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
		font-size: 48px;
		user-select: none;
	}

	span,
	.title {
		background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.title {
		font-size: 36px;
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

	input,
	button {
		user-select: none;
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
		font-size: 18px;
		cursor: pointer;
	}
`;

const StyledWrapperLeft = styled.div`
	width: 40vw;
	height: 100vh;
	background: #ececf0;
	padding: 100px;
	border-right: 1px solid #d2d2d2;
`;

const StyledWrapperRight = styled.div`
	width: 60vw;
	height: 100vh;
	background: #fff;
	padding: 100px;
	text-align: center;
`;

export default function Home() {
	return (
		<StyledHome>
			<StyledWrapperLeft>
				<h1>
					the <span>first</span> globalized electronic diary for schools.
				</h1>
				<SignUp />
				<SignIn />
			</StyledWrapperLeft>
			<StyledWrapperRight>
				<Logo />
				<div className="title">schoolify</div>
				<div className="home-container">
					<img className="home-bg" src={homebg} alt="home background" />
				</div>
			</StyledWrapperRight>
		</StyledHome>
	);
}
