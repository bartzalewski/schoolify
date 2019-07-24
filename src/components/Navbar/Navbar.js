import React from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as User } from '../../images/user.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.nav`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100px;
	border-bottom: 1px solid #d2d2d2;
	position: fixed;
	background: #fff;
	z-index: 3;

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

	.left,
	.right {
		width: 25vw;
	}

	.center {
		width: 50vw;
		justify-content: space-between;
		margin: 95px;

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

		@media (max-width: 1359px) {
			font-size: 2rem;
			margin: 12.5px;
		}

		@media (max-width: 1124px) {
			display: none;
		}
	}
	.box {
		width: 40px;
		height: 40px;
		@media (max-width: 1359px) {
			width: 30px;
			height: 30px;
		}
	}
	.box:hover::before {
		content: '';
		width: 100px;
		height: 3px;
		background: #fe843f;
		position: absolute;
		margin-left: -30px;
		margin-top: 66px;

		@media (max-width: 1359px) {
			display: none;
		}
	}
	svg {
		@media (max-width: 1359px) {
			width: 30px;
			height: 30px;
		}
	}
	svg:hover {
		fill: #fe843f;
	}
	.schoolify-logo {
		min-width: 50px;
	}

	@media (max-width: 1124px) {
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

const Navbar = () => {
	return (
		<StyledNavbar>
			<div className="left">
				<Logo className="schoolify-logo" />
				<p className="title">schoolify</p>
			</div>
			<div className="center">
				<Link to="/" className="box">
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M39.7799 18.252L33.7929 12.7275V3.67686H26.8963V6.36409L19.9997 0L0.220136 18.252C-0.0584876 18.5097 -0.0750394 18.9435 0.184274 19.2211C0.442897 19.498 0.879453 19.5137 1.15946 19.2567L3.44845 17.1445V40H14.483H25.5176H36.5522V17.1438L38.8412 19.2561C38.9736 19.3787 39.1426 19.439 39.3109 19.439C39.4964 19.439 39.6806 19.3657 39.8157 19.2204C40.075 18.9435 40.0585 18.5097 39.7799 18.252ZM28.2756 5.04755H32.4136V11.4548L28.2756 7.63677V5.04755ZM15.8617 38.6293V24.194C15.8617 23.8396 16.1513 23.5518 16.5079 23.5518H23.4914C23.848 23.5518 24.1376 23.8396 24.1376 24.194V38.6293H15.8617V38.6293ZM35.1722 38.6293H25.517V24.194C25.517 23.0837 24.6087 22.1811 23.4914 22.1811H16.5079C15.3906 22.1811 14.4824 23.0837 14.4824 24.194V38.6293H4.82708V15.8712L19.9997 1.8703L29.848 10.9579L33.7929 14.5978L35.1722 15.8705V38.6293V38.6293Z" />
					</svg>
				</Link>
				<Link to="/notifications" className="box">
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
				</Link>
				<Link to="/profile" className="box">
					<User />
				</Link>
				<Link to="/lessons" className="box">
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M34.3333 1.33333H32.3333V0.666667C32.3333 0.2985 32.0348 0 31.6667 0C31.2985 0 31 0.2985 31 0.666667V1.33333H29.6667V0.666667C29.6667 0.2985 29.3682 0 29 0C28.6318 0 28.3333 0.2985 28.3333 0.666667V1.33333H27V0.666667C27 0.2985 26.7015 0 26.3333 0C25.9652 0 25.6667 0.2985 25.6667 0.666667V1.33333H24.3333V0.666667C24.3333 0.2985 24.0348 0 23.6667 0C23.2985 0 23 0.2985 23 0.666667V1.33333H13.6667V0.666667C13.6667 0.2985 13.3682 0 13 0C12.6318 0 12.3333 0.2985 12.3333 0.666667V1.33333H11V0.666667C11 0.2985 10.7015 0 10.3333 0C9.96517 0 9.66667 0.2985 9.66667 0.666667V1.33333H8.33334V0.666667C8.33334 0.2985 8.03484 0 7.66667 0C7.2985 0 7 0.2985 7 0.666667V1.33333H5.66667V0.666667C5.66667 0.2985 5.36817 0 5 0C4.63184 0 4.33334 0.2985 4.33334 0.666667V1.33333H2.33334C1.96517 1.33333 1.66667 1.63183 1.66667 2V33.3333C1.66667 33.7015 1.96517 34 2.33334 34H21.7C22.0682 34.0009 22.3674 33.7032 22.3683 33.335C22.3683 33.3189 22.3678 33.3028 22.3667 33.2867L22.3613 33.2093C22.3467 33.0293 22.3333 32.8493 22.3333 32.6667C22.3355 32.0068 22.4133 31.3494 22.5653 30.7073C22.7137 30.0682 22.9353 29.4483 23.226 28.86C23.2547 28.8013 23.2807 28.742 23.3107 28.684C23.3993 28.5147 23.4953 28.3507 23.5947 28.1873C23.626 28.136 23.6567 28.0833 23.6893 28.0327C23.7973 27.8633 23.9111 27.6983 24.0307 27.5373C24.0553 27.5033 24.0807 27.4707 24.106 27.436C24.2393 27.2618 24.3778 27.0929 24.5213 26.9293L24.5413 26.9073C25.4937 25.8445 26.6907 25.0297 28.0287 24.5333L28.146 24.49C28.326 24.4267 28.5087 24.3707 28.6933 24.3187C28.7767 24.2953 28.8613 24.274 28.946 24.252C29.102 24.2133 29.2587 24.1773 29.4173 24.1473C29.5507 24.1227 29.6893 24.104 29.826 24.0853C29.9467 24.068 30.066 24.0487 30.188 24.0373C30.4547 24.012 30.726 23.996 31 23.996C31.1807 23.996 31.3587 24.01 31.5333 24.022L31.6167 24.028C31.622 24.028 31.628 24.028 31.6333 24.028C32.475 24.0913 33.303 24.2765 34.0913 24.578C34.4344 24.7117 34.8208 24.5419 34.9545 24.1988C34.9845 24.1218 34.9999 24.04 35 23.9573V2C35 1.63183 34.7015 1.33333 34.3333 1.33333ZM22.3693 27.642C22.346 27.68 22.3213 27.716 22.3 27.754C22.204 27.9227 22.1173 28.0967 22.0333 28.2713C21.986 28.3673 21.938 28.4627 21.894 28.5607C21.8213 28.7213 21.7533 28.8853 21.6893 29.0507C21.6827 29.0673 21.6753 29.0827 21.6687 29.0993V26H23.5693C23.1149 26.5054 22.7129 27.0556 22.3693 27.642ZM25.6667 24.2227C25.4373 24.368 25.216 24.5227 25 24.6853V24.6667H21.6667V20.6667H25.6667V24.2227ZM25.6667 19.3333H21.6667V15.3333H25.6667V19.3333ZM25.6667 14H21.6667V10H25.6667V14ZM31 15.3333V19.3333H27V15.3333H31ZM27 14V10H31V14H27ZM31.0013 22.6667C30.6893 22.6667 30.3813 22.6847 30.076 22.7133C29.9427 22.7253 29.818 22.746 29.6887 22.7627C29.5253 22.7847 29.3627 22.8073 29.202 22.8373C29.0413 22.8673 28.8647 22.904 28.698 22.9447C28.596 22.9693 28.494 22.9953 28.3927 23.0233C28.1927 23.078 27.9927 23.1373 27.7927 23.204C27.7673 23.2133 27.7427 23.2233 27.7173 23.232C27.4747 23.3167 27.2347 23.4053 27.0013 23.5073V20.6667H31.0013V22.6667V22.6667ZM33.6667 23.0347C33.2291 22.912 32.7836 22.8195 32.3333 22.758V9.33333C32.3333 8.96517 32.0348 8.66667 31.6667 8.66667H5C4.63184 8.66667 4.33334 8.96517 4.33334 9.33333V30.6667C4.33334 31.0348 4.63184 31.3333 5 31.3333H21.0993C21.0365 31.7751 21.0033 32.2205 21 32.6667H3.00001V7.33333H33.6667V23.0347ZM16.3333 24.6667V20.6667H20.3333V24.6667H16.3333ZM20.3333 26V30H16.3333V26H20.3333ZM16.3333 19.3333V15.3333H20.3333V19.3333H16.3333ZM16.3333 14V10H20.3333V14H16.3333ZM11 24.6667V20.6667H15V24.6667H11ZM15 26V30H11V26H15ZM11 19.3333V15.3333H15V19.3333H11ZM11 14V10H15V14H11ZM5.66667 24.6667V20.6667H9.66667V24.6667H5.66667ZM9.66667 26V30H5.66667V26H9.66667ZM5.66667 19.3333V15.3333H9.66667V19.3333H5.66667ZM5.66667 14V10H9.66667V14H5.66667ZM33.6667 6H3.00001V2.66667H4.33334V3.33333C4.33334 3.7015 4.63184 4 5 4C5.36817 4 5.66667 3.7015 5.66667 3.33333V2.66667H7V3.33333C7 3.7015 7.2985 4 7.66667 4C8.03484 4 8.33334 3.7015 8.33334 3.33333V2.66667H9.66667V3.33333C9.66667 3.7015 9.96517 4 10.3333 4C10.7015 4 11 3.7015 11 3.33333V2.66667H12.3333V3.33333C12.3333 3.7015 12.6318 4 13 4C13.3682 4 13.6667 3.7015 13.6667 3.33333V2.66667H23V3.33333C23 3.7015 23.2985 4 23.6667 4C24.0348 4 24.3333 3.7015 24.3333 3.33333V2.66667H25.6667V3.33333C25.6667 3.7015 25.9652 4 26.3333 4C26.7015 4 27 3.7015 27 3.33333V2.66667H28.3333V3.33333C28.3333 3.7015 28.6318 4 29 4C29.3682 4 29.6667 3.7015 29.6667 3.33333V2.66667H31V3.33333C31 3.7015 31.2985 4 31.6667 4C32.0348 4 32.3333 3.7015 32.3333 3.33333V2.66667H33.6667V6Z" />
						<path d="M31 25.3333C26.9499 25.3333 23.6667 28.6166 23.6667 32.6667C23.6667 36.7167 26.9499 40 31 40C35.0501 40 38.3333 36.7167 38.3333 32.6667C38.3286 28.6186 35.0481 25.3381 31 25.3333ZM31 38.6667C27.6863 38.6667 25 35.9803 25 32.6667C25 29.3529 27.6863 26.6667 31 26.6667C34.3138 26.6667 37 29.3529 37 32.6667C36.9963 35.9788 34.3122 38.663 31 38.6667Z" />
						<path d="M34.7883 28.862C34.53 28.6124 34.1203 28.6124 33.862 28.862L31 31.724L29.4713 30.1953C29.2065 29.9395 28.7845 29.9468 28.5287 30.2117C28.2791 30.47 28.2791 30.8797 28.5287 31.138L30.5287 33.138C30.789 33.3983 31.211 33.3983 31.4713 33.138L34.8047 29.8047C35.0605 29.5398 35.0532 29.1178 34.7883 28.862Z" />
					</svg>
				</Link>
				<Link to="/contact" className="box">
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M38.997 13.3378L26.6607 1.00143C25.3255 -0.333809 23.1528 -0.333809 21.8176 1.00143L2.56555 20.2535C1.89797 20.9212 1.56414 21.7981 1.56414 22.6751C1.56414 23.5521 1.89797 24.429 2.56555 25.0967L5.66078 28.1919L2.26211 31.5906C2.10953 31.7431 2.03328 31.9431 2.03328 32.143C2.03328 32.3429 2.10953 32.5428 2.26211 32.6954C2.56719 33.0005 3.06188 33.0006 3.36695 32.6954L6.76562 29.2967L8.18117 30.7124L0.228828 38.6648C0.07625 38.8173 0 39.0173 0 39.2172C0 39.4171 0.07625 39.6171 0.228828 39.7696C0.533906 40.0747 1.02859 40.0747 1.33375 39.7696L9.28617 31.8172L14.9018 37.4329C16.2371 38.7681 18.4097 38.7681 19.7449 37.4329L38.997 18.1808C39.6438 17.5341 40 16.674 40 15.7593C40 14.8446 39.6438 13.9846 38.997 13.3378ZM16.7557 36.7831C16.4816 36.6958 16.2236 36.5451 16.0066 36.3281L3.67039 23.9918C3.18359 23.5049 3.02484 22.8138 3.19086 22.1921H16.7557V36.7831ZM13.9317 20.6296L16.2484 18.313C16.5534 18.0079 16.5535 17.5132 16.2484 17.2081C15.9432 16.9031 15.4486 16.903 15.1435 17.2081L11.722 20.6296H9.44578L16.5087 13.5667C16.8137 13.2616 16.8138 12.7669 16.5087 12.4617C16.2037 12.1567 15.709 12.1567 15.4038 12.4617L7.23609 20.6296H4.39922L22.1937 2.8351V18.7675C22.1937 19.7943 21.3584 20.6296 20.3316 20.6296H13.9317ZM37.8922 17.076L18.6401 36.3281C18.5408 36.4274 18.4323 36.5118 18.3183 36.584V22.1921H20.3316C22.2199 22.1921 23.7562 20.6559 23.7562 18.7675V16.7542H32.7113L28.1904 21.2751C28.0379 21.4276 27.9616 21.6276 27.9616 21.8275C27.9616 22.0275 28.0378 22.2274 28.1904 22.3799C28.4955 22.685 28.9902 22.685 29.2953 22.3799L34.9205 16.7548C34.9206 16.7546 34.9208 16.7544 34.9209 16.7542H38.1497C38.0766 16.8693 37.9909 16.9774 37.8922 17.076ZM23.7562 15.1917V1.62682C24.3779 1.4608 25.0691 1.61955 25.5559 2.10635L37.8921 14.4426C38.1055 14.656 38.2603 14.9121 38.3494 15.1917H23.7562Z" />
					</svg>
				</Link>
			</div>
			<div className="right">
				<Link to="/settings" className="box">
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M37.9407 15.5556H34.1985C33.597 15.5556 33.1015 15.2244 32.8711 14.6689C32.6407 14.1133 32.7578 13.5281 33.1822 13.103L35.8281 10.4578C36.217 10.0689 36.4311 9.55111 36.4311 9.00148C36.4311 8.45111 36.217 7.93407 35.8281 7.54444L32.4556 4.17185C31.6778 3.39407 30.3215 3.39259 29.5422 4.17185L26.897 6.81704C26.4719 7.24148 25.8852 7.36 25.3311 7.12889C24.7756 6.89852 24.4444 6.40296 24.4444 5.80148V2.05926C24.4444 0.923704 23.5207 0 22.3852 0H17.6148C16.4793 0 15.5556 0.923704 15.5556 2.05926V5.80148C15.5556 6.40296 15.2244 6.89852 14.6689 7.12889C14.1148 7.36074 13.5281 7.24148 13.103 6.81704L10.4578 4.17185C9.67852 3.39259 8.32222 3.39407 7.54444 4.17185L4.17185 7.54444C3.78296 7.93333 3.56889 8.45111 3.56889 9.00148C3.56889 9.55111 3.78296 10.0681 4.17185 10.4578L6.81778 13.103C7.24222 13.5281 7.35852 14.1133 7.12889 14.6689C6.89926 15.2244 6.40296 15.5556 5.80148 15.5556H2.05926C0.923704 15.5556 0 16.4793 0 17.6148V22.3844C0 23.5207 0.923704 24.4444 2.05926 24.4444H5.80148C6.40296 24.4444 6.89852 24.7756 7.12889 25.3311C7.35926 25.8867 7.24222 26.4719 6.81778 26.897L4.17185 29.5422C3.78296 29.9311 3.56889 30.4489 3.56889 30.9985C3.56889 31.5489 3.78296 32.0659 4.17185 32.4556L7.54444 35.8281C8.32296 36.6067 9.67852 36.6081 10.4578 35.8281L13.103 33.1822C13.5281 32.7578 14.1126 32.6407 14.6689 32.8711C15.2244 33.1015 15.5556 33.597 15.5556 34.1985V37.9407C15.5556 39.0763 16.4793 40 17.6148 40H22.3844C23.52 40 24.4437 39.0763 24.4437 37.9407V34.1985C24.4437 33.597 24.7748 33.1015 25.3304 32.8711C25.8867 32.64 26.4711 32.7578 26.8963 33.1822L29.5415 35.8281C30.3207 36.6074 31.677 36.6059 32.4548 35.8281L35.8274 32.4556C36.2163 32.0667 36.4304 31.5489 36.4304 30.9985C36.4304 30.4489 36.2163 29.9319 35.8274 29.5422L33.1815 26.897C32.757 26.4719 32.6407 25.8867 32.8704 25.3311C33.1 24.7756 33.597 24.4444 34.1985 24.4444H37.9407C39.0763 24.4444 40 23.5207 40 22.3852V17.6148C40 16.4793 39.0763 15.5556 37.9407 15.5556ZM38.5185 22.3852C38.5185 22.7037 38.2593 22.963 37.9407 22.963H34.1985C32.9956 22.963 31.9622 23.6533 31.5022 24.7644C31.0415 25.8756 31.2837 27.0948 32.1348 27.9452L34.7807 30.5904C35.0067 30.8163 35.0067 31.183 34.7807 31.4081L31.4081 34.7807C31.183 35.0059 30.8163 35.0074 30.5904 34.7807L27.9452 32.1348C27.0941 31.2837 25.8756 31.043 24.7644 31.5022C23.6533 31.9622 22.963 32.9956 22.963 34.1985V37.9407C22.963 38.2593 22.7037 38.5185 22.3852 38.5185H17.6148C17.2963 38.5185 17.037 38.2593 17.037 37.9407V34.1985C17.037 32.9956 16.3467 31.9622 15.2356 31.5022C14.863 31.3474 14.4793 31.2719 14.1 31.2719C13.3489 31.2719 12.6207 31.5681 12.0548 32.1341L9.40963 34.78C9.18296 35.0067 8.8163 35.0052 8.59185 34.78L5.21926 31.4074C4.99333 31.1815 4.99333 30.8148 5.21926 30.5896L7.86518 27.9444C8.71556 27.0941 8.95852 25.8748 8.49778 24.7637C8.03778 23.6533 7.00444 22.963 5.80148 22.963H2.05926C1.74074 22.963 1.48148 22.7037 1.48148 22.3852V17.6148C1.48148 17.2963 1.74074 17.037 2.05926 17.037H5.80148C7.00444 17.037 8.03778 16.3467 8.49778 15.2356C8.95852 14.1244 8.7163 12.9052 7.86518 12.0548L5.21926 9.40963C4.99333 9.1837 4.99333 8.81704 5.21926 8.59185L8.59185 5.21926C8.81704 4.99333 9.1837 4.99333 9.40963 5.21926L12.0548 7.86444C12.9044 8.71407 14.123 8.95778 15.2356 8.49704C16.3467 8.03778 17.037 7.00444 17.037 5.80148V2.05926C17.037 1.74074 17.2963 1.48148 17.6148 1.48148H22.3844C22.7037 1.48148 22.963 1.74074 22.963 2.05926V5.80148C22.963 7.00444 23.6533 8.03778 24.7644 8.49778C25.877 8.95852 27.0948 8.71556 27.9452 7.86518L30.5904 5.22C30.817 4.99407 31.1837 4.99407 31.4081 5.22L34.7807 8.59259C35.0067 8.81852 35.0067 9.18519 34.7807 9.41037L32.1348 12.0556C31.2844 12.9059 31.0415 14.1252 31.5022 15.2363C31.9622 16.3474 32.9956 17.0378 34.1985 17.0378H37.9407C38.2593 17.037 38.5185 17.2963 38.5185 17.6148V22.3852Z" />
						<path d="M20 13.3333C16.3237 13.3333 13.3333 16.3237 13.3333 20C13.3333 23.6763 16.3237 26.6667 20 26.6667C23.6763 26.6667 26.6667 23.6763 26.6667 20C26.6667 16.3237 23.6763 13.3333 20 13.3333ZM20 25.1852C17.1415 25.1852 14.8148 22.8585 14.8148 20C14.8148 17.1415 17.1415 14.8148 20 14.8148C22.8585 14.8148 25.1852 17.1415 25.1852 20C25.1852 22.8585 22.8585 25.1852 20 25.1852Z" />
					</svg>
				</Link>
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
