import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import firebase from '../../config/fbConfig';

const StyledNavbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	height: 100px;
	border-bottom: 1px solid #d2d2d2;
	position: fixed;
	background: #fff;
	z-index: 3;

	.active {
		svg {
			fill: #fe843f;
		}

		img {
			box-shadow: 0 0 0 2pt #fe843f;

			@media (max-width: 1359px) {
				box-shadow: 0 0 0 1pt #fe843f;
			}
		}

		&::before {
			transform: scaleX(1) !important;
		}

		span {
			color: #fe843f;
		}
	}

	.left,
	.center,
	.right {
		display: flex;
		align-items: center;
		margin: 25px;

		@media (max-width: 1359px) {
			margin: 12.5px;
		}
	}

	.left {
		text-decoration: none;

		a {
			display: flex;
		}
	}

	.left,
	.right {
		width: 20vw;
	}

	.center {
		width: 680px;
		justify-content: space-between;

		@media (max-width: 1124px) {
			margin: 0;
		}
	}

	.right {
		justify-content: flex-end;
	}

	.title {
		font-weight: 300;
		font-size: 2.5rem;
		margin: 25px;
		background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		user-select: none;

		@media (max-width: 1359px) {
			font-size: 2rem;
			margin: 12.5px;
		}

		@media (max-width: 1124px) {
			display: none;
		}
	}

	.box {
		width: 20%;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent;
		transition: 0.2s;
		color: #293347;
		flex-direction: column;
		text-decoration: none;
		position: relative;

		&:hover {
			svg {
				fill: #fe843f;
				transition: 0.2s;
			}
			span {
				color: #fe843f;
				transition: 0.2s;
			}
		}

		&::before {
			content: '';
			width: 100%;
			height: 2px;
			background: #fe843f;
			position: absolute;
			bottom: 0;
			transform: scaleX(0);
			transition: 0.2s ease-in-out;

			@media (max-width: 1359px) {
				height: 1px;
			}
		}

		img {
			width: 40px;
			height: 40px;
			border-radius: 100px;
			transition: 0.2s;
			object-fit: contain;

			@media (max-width: 1359px) {
				width: 30px;
				height: 30px;
			}
		}

		@media (max-width: 1359px) {
			height: 60px;

			span {
				font-size: 14px;
			}
		}

		@media (max-width: 1124px) {
			span {
				display: none;
			}
		}
	}

	.nav-more {
		width: 100px;
	}

	.avatar {
		&:hover {
			img {
				box-shadow: 0 0 0 2pt #fe843f;
				transition: 0.2s;

				@media (max-width: 1359px) {
					box-shadow: 0 0 0 1pt #fe843f;
				}
			}
		}
	}

	.schoolify-logo {
		transition: 0.2s;
		width: 40px;
		height: 40px;
		box-shadow: none !important;

		&:hover {
			transform: scale(1.1);
			transition: 0.2s;
		}
	}

	svg {
		transition: 0.2s;
		fill: #293347;
	}

	svg,
	img {
		@media (max-width: 1359px) {
			width: 30px !important;
			height: 30px !important;
		}
	}

	@media (max-width: 1359px) {
		height: 60px;
	}

	@media (max-width: 1124px) {
		top: 0px;
		.left,
		.right {
			width: 10vw;
		}
		.center {
			width: 80vw;
			justify-content: space-evenly;
		}
	}
`;

export default function Navbar(props) {
	return (
		<StyledNavbar>
			<div className="left">
				<NavLink exact to="/">
					<img src={logo} className="schoolify-logo" alt="schoolify logo" />
				</NavLink>
				<p className="title">schoolify</p>
			</div>
			<div className="center">
				<NavLink
					exact
					activeClassName="active"
					to="/"
					className="box nav-home"
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M39.7799 18.252L33.7929 12.7275V3.67686H26.8963V6.36409L19.9997 0L0.220136 18.252C-0.0584876 18.5097 -0.0750394 18.9435 0.184274 19.2211C0.442897 19.498 0.879453 19.5137 1.15946 19.2567L3.44845 17.1445V40H14.483H25.5176H36.5522V17.1438L38.8412 19.2561C38.9736 19.3787 39.1426 19.439 39.3109 19.439C39.4964 19.439 39.6806 19.3657 39.8157 19.2204C40.075 18.9435 40.0585 18.5097 39.7799 18.252ZM28.2756 5.04755H32.4136V11.4548L28.2756 7.63677V5.04755ZM15.8617 38.6293V24.194C15.8617 23.8396 16.1513 23.5518 16.5079 23.5518H23.4914C23.848 23.5518 24.1376 23.8396 24.1376 24.194V38.6293H15.8617V38.6293ZM35.1722 38.6293H25.517V24.194C25.517 23.0837 24.6087 22.1811 23.4914 22.1811H16.5079C15.3906 22.1811 14.4824 23.0837 14.4824 24.194V38.6293H4.82708V15.8712L19.9997 1.8703L29.848 10.9579L33.7929 14.5978L35.1722 15.8705V38.6293V38.6293Z" />
					</svg>
					<span>Home</span>
				</NavLink>
				<NavLink
					activeClassName="active"
					to="/notifications"
					className="box nav-notifications"
				>
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0)">
							<path d="M36.5484 33.7384L33.685 28.9684C32.365 26.7667 31.6666 24.2467 31.6666 21.6784V17.5C31.6666 11.0684 26.4316 5.83337 20 5.83337C13.5684 5.83337 8.33336 11.0684 8.33336 17.5V21.6784C8.33336 24.2467 7.63501 26.7667 6.31501 28.9684L3.45165 33.7384C3.29665 33.995 3.29329 34.3167 3.44001 34.5767C3.58836 34.8384 3.86665 35.0001 4.16665 35.0001H35.8333C36.1333 35.0001 36.4116 34.8384 36.5599 34.5767C36.7066 34.3166 36.7034 33.995 36.5484 33.7384ZM5.63836 33.3334L7.74336 29.825C9.22 27.365 10 24.5484 10 21.6784V17.5C10 11.985 14.485 7.50001 20 7.50001C25.515 7.50001 30 11.985 30 17.5V21.6784C30 24.5484 30.78 27.365 32.255 29.825L34.3616 33.3334H5.63836Z" />
							<path d="M20 0C18.1616 0 16.6666 1.495 16.6666 3.33336V6.66672C16.6666 7.12664 17.04 7.5 17.5 7.5C17.96 7.5 18.3334 7.12664 18.3334 6.66664V3.33336C18.3334 2.41336 19.08 1.66672 20 1.66672C20.92 1.66672 21.6666 2.41336 21.6666 3.33336V6.66672C21.6666 7.12664 22.04 7.5 22.5 7.5C22.96 7.5 23.3334 7.12664 23.3334 6.66664V3.33336C23.3334 1.495 21.8384 0 20 0Z" />
							<path d="M23.6066 33.745C23.3716 33.3484 22.8633 33.2184 22.465 33.4466C22.0666 33.68 21.9334 34.1916 22.1666 34.5883C22.3833 34.9566 22.5016 35.3983 22.5016 35.8333C22.5016 37.2116 21.38 38.3333 20.0016 38.3333C18.6233 38.3333 17.5016 37.2116 17.5016 35.8333C17.5016 35.3983 17.62 34.9566 17.8366 34.5883C18.0683 34.1899 17.935 33.6799 17.5383 33.4466C17.1366 33.2183 16.6299 33.3483 16.3966 33.745C16.0283 34.375 15.8333 35.0966 15.8333 35.8334C15.8334 38.1316 17.7016 40 20 40C22.2984 40 24.1666 38.1316 24.17 35.8334C24.17 35.0966 23.975 34.375 23.6066 33.745Z" />
						</g>
						<defs>
							<clipPath id="clip0">
								<rect width="40" height="40" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<span>Notifications</span>
				</NavLink>
				<NavLink
					activeClassName="active"
					to="/profile"
					className="box nav-profile avatar"
				>
					<img
						src={
							props.profile.userAvatar || firebase.auth().currentUser.photoURL
						}
						alt=""
					/>
					<span>Profile</span>
				</NavLink>
				<NavLink
					activeClassName="active"
					to="/lessons"
					className="box nav-lessons"
				>
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M38 2.66667H33.3333V0.666667C33.3333 0.298 33.0353 0 32.6666 0H28C27.6313 0 27.3333 0.298 27.3333 0.666667V2.66667H12.6666V0.666667C12.6666 0.298 12.3686 0 12 0H7.33331C6.96465 0 6.66665 0.298 6.66665 0.666667V2.66667H1.99998C1.63131 2.66667 1.33331 2.96467 1.33331 3.33333V10.6667V39.3333C1.33331 39.702 1.63131 40 1.99998 40H38C38.3686 40 38.6666 39.702 38.6666 39.3333V10.6667V3.33333C38.6666 2.96467 38.3686 2.66667 38 2.66667ZM28.6666 1.33333H32V3.33333V5.33333H28.6666V3.33333V1.33333ZM7.99998 1.33333H11.3333V3.33333V5.33333H7.99998V3.33333V1.33333ZM2.66665 4H6.66665V6C6.66665 6.36867 6.96465 6.66667 7.33331 6.66667H12C12.3686 6.66667 12.6666 6.36867 12.6666 6V4H27.3333V6C27.3333 6.36867 27.6313 6.66667 28 6.66667H32.6666C33.0353 6.66667 33.3333 6.36867 33.3333 6V4H37.3333V10H2.66665V4ZM2.66665 38.6667V11.3333H37.3333V38.6667H2.66665Z" />
						<path d="M25.3333 15.3333H20.6666H19.3333H14.6666H13.3333H7.33331V21.3333V22.6666V27.3333V28.6666V34.6666H13.3333H14.6666H19.3333H20.6666H25.3333H26.6666H32.6666V28.6666V27.3333V22.6666V21.3333V15.3333H26.6666H25.3333ZM20.6666 16.6666H25.3333V21.3333H20.6666V16.6666ZM25.3333 27.3333H20.6666V22.6666H25.3333V27.3333ZM14.6666 22.6666H19.3333V27.3333H14.6666V22.6666ZM14.6666 16.6666H19.3333V21.3333H14.6666V16.6666ZM8.66665 16.6666H13.3333V21.3333H8.66665V16.6666ZM8.66665 22.6666H13.3333V27.3333H8.66665V22.6666ZM13.3333 33.3333H8.66665V28.6666H13.3333V33.3333ZM19.3333 33.3333H14.6666V28.6666H19.3333V33.3333ZM25.3333 33.3333H20.6666V28.6666H25.3333V33.3333ZM31.3333 33.3333H26.6666V28.6666H31.3333V33.3333ZM31.3333 27.3333H26.6666V22.6666H31.3333V27.3333ZM31.3333 16.6666V21.3333H26.6666V16.6666H31.3333Z" />
					</svg>
					<span>Lessons</span>
				</NavLink>
				<NavLink activeClassName="active" to="/chat" className="box nav-chat">
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M34.1666 0H10.8334C7.61664 0 5 2.61664 5 5.83336V20.8334C5 24.05 7.61664 26.6667 10.8334 26.6667H25.4884L33.5767 34.7567C33.7367 34.9151 33.9501 35.0001 34.1667 35.0001C34.2734 35.0001 34.3817 34.9784 34.4851 34.9367C34.7967 34.8084 35.0001 34.5034 35.0001 34.1667V26.6084C37.8234 26.2017 40.0001 23.7667 40.0001 20.8334V5.83336C40 2.61664 37.3834 0 34.1666 0ZM38.3334 20.8334C38.3334 23.1317 36.4634 25 34.1667 25C33.7067 25 33.3334 25.3734 33.3334 25.8334V32.155L26.4234 25.2434C26.2667 25.0884 26.055 25 25.8334 25H10.8334C8.53672 25 6.66672 23.1316 6.66672 20.8334V5.83336C6.66672 3.535 8.53672 1.66672 10.8334 1.66672H34.1667C36.4634 1.66672 38.3334 3.53508 38.3334 5.83336V20.8334V20.8334Z" />
						<path d="M26.12 30H14.1666C13.945 30 13.7333 30.0883 13.5766 30.245L6.66664 37.155V30.8333C6.66664 30.3733 6.29328 30 5.83328 30C3.53664 30 1.66664 28.1316 1.66664 25.8333V10.8333C1.66664 9.64999 2.17164 8.51671 3.055 7.72999C3.39836 7.42163 3.42664 6.89499 3.12 6.55335C2.81164 6.20999 2.28836 6.17999 1.94336 6.48671C0.708359 7.59163 0 9.17663 0 10.8333V25.8333C0 28.7667 2.17664 31.2017 5 31.6083V39.1667C5 39.5033 5.20336 39.8083 5.515 39.9367C5.61836 39.9783 5.72664 40.0001 5.83336 40.0001C6.05 40.0001 6.26336 39.9151 6.42172 39.7567L14.5117 31.6667H26.1201C26.5801 31.6667 26.9534 31.2933 26.9534 30.8333C26.9534 30.3733 26.58 30 26.12 30Z" />
						<defs>
							<clipPath id="clip0">
								<rect width="40" height="40" />
							</clipPath>
						</defs>
					</svg>
					<span>Chat</span>
				</NavLink>
			</div>
			<div className="right">
				<NavLink activeClassName="active" to="/more" className="box nav-more">
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0ZM20 37.5C10.335 37.5 2.5 29.665 2.5 20C2.5 10.335 10.335 2.5 20 2.5C29.665 2.5 37.5 10.335 37.5 20C37.5 29.665 29.665 37.5 20 37.5Z" />
						<path d="M20 22.5C21.3807 22.5 22.5 21.3807 22.5 20C22.5 18.6193 21.3807 17.5 20 17.5C18.6193 17.5 17.5 18.6193 17.5 20C17.5 21.3807 18.6193 22.5 20 22.5Z" />
						<path d="M28.75 22.5C30.1307 22.5 31.25 21.3807 31.25 20C31.25 18.6193 30.1307 17.5 28.75 17.5C27.3693 17.5 26.25 18.6193 26.25 20C26.25 21.3807 27.3693 22.5 28.75 22.5Z" />
						<path d="M11.25 22.5C12.6307 22.5 13.75 21.3807 13.75 20C13.75 18.6193 12.6307 17.5 11.25 17.5C9.86929 17.5 8.75 18.6193 8.75 20C8.75 21.3807 9.86929 22.5 11.25 22.5Z" />
					</svg>
					<span>More</span>
				</NavLink>
			</div>
		</StyledNavbar>
	);
}
