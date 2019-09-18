import React from 'react';
import styled from 'styled-components';
import zszlogo from '../images/schools/logos/zsz-zabk-logo.gif';
import lologo from '../images/schools/logos/lo-zabk-logo.jpg';
import sp3logo from '../images/schools/logos/sp3-zabk-logo.jpg';
import p4logo from '../images/schools/logos/p4-zabk-logo.jpg';
import { Link } from 'react-router-dom';

const StyledLessons = styled.section`
	width: 50vw;
	background: #ececf0;

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
		user-select: none;
	}

	.container {
		padding: 40px;
	}

	.lesson-box {
		background: #fff;
		padding: 15px 25px;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0.5rem 0;
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}

		&:first-of-type {
			margin-top: 2rem;
		}
	}

	.left {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	button {
		border-radius: 10px;
		background: #ff9800;
		color: #fff;
		font-weight: 600;
		border: none;
		height: 50px;
		width: fit-content;
		font-size: 1.125rem;
		cursor: pointer;
		padding: 2.5px 20px;
		margin: 0.25rem;
	}

	.school-logo {
		width: 50px;
		height: 50px;
		border-radius: 100px;
	}

	.school-name {
		margin-left: 1rem;
		font-weight: 600;
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
		button {
			font-size: 1rem;
		}
		.school-name {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 452px) {
		.lesson-box {
			padding: 5px 10px;
		}
		.school-name,
		button {
			font-size: 0.8rem;
		}
		.school-name {
			margin-left: 0.5rem;
		}
	}
`;

const Lessons = () => {
	return (
		<StyledLessons>
			<div className="container">
				<h1>Lessons</h1>
				<div className="lesson-box">
					<div className="left">
						<img className="school-logo" src={zszlogo} alt="" />
						<span className="school-name">
							ZSZ im. Stanisława Staszica w Ząbkowicach Śląskich
						</span>
					</div>
					<div className="right">
						<Link to="/lessons-zsz">
							<button>View plans</button>
						</Link>
					</div>
				</div>
				<div className="lesson-box">
					<div className="left">
						<img className="school-logo" src={sp3logo} alt="" />
						<span className="school-name">
							SP3 im. Mikołaja Kopernika w Ząbkowicach Śląskich
						</span>
					</div>
					<div className="right">
						<Link to="/lessons-sp3">
							<button>View plans</button>
						</Link>
					</div>
				</div>
				<div className="lesson-box">
					<div className="left">
						<img className="school-logo" src={lologo} alt="" />
						<span className="school-name">
							LO im. Władysława Jagiełły w Ząbkowicach Śląskich
						</span>
					</div>
					<div className="right">
						<Link to="/lessons-lo">
							<button>View plans</button>
						</Link>
					</div>
				</div>
				<div className="lesson-box">
					<div className="left">
						<img className="school-logo" src={p4logo} alt="" />
						<span className="school-name">
							Przedszkole Publiczne nr 4 w Ząbkowicach Śląskich
						</span>
					</div>
					<div className="right">
						<Link to="/lessons-p4">
							<button>View plans</button>
						</Link>
					</div>
				</div>
			</div>
		</StyledLessons>
	);
};

export default Lessons;
