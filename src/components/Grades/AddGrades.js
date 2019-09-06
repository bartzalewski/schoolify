import React from 'react';
import styled from 'styled-components';
import english from '../../images/subjects/english.svg';

const StyledAddGrades = styled.div`
	width: 50vw;
	background: #ececf0;

	.container {
		padding: 40px;
	}

	.subjects {
		margin-top: 2rem;
	}

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
	}

	img,
	.add {
		width: 60px;
		height: 60px;
	}

	.box {
		display: flex;
		justify-content: space-between;
		background: #fff;
		padding: 15px 25px;
		border-radius: 15px;
		margin-top: 0.5rem;

		.flex-start,
		.flex-end {
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}

		.flex-end {
			justify-content: flex-end;
		}

		h3 {
			margin-left: 1rem;
			font-weight: 400;
			font-size: 1.5rem;
		}

		button {
			border-radius: 10px;
			background: #4caf50;
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

		.remove {
			background: #f44336;
		}
	}

	@media (max-width: 1359px) {
		padding: 12.5px;

		.container {
			padding: 20px;
		}

		img,
		.add {
			height: 30px;
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

export default function AddGrades() {
	return (
		<StyledAddGrades>
			<div className="container">
				<h1>Add a grade</h1>
				<div className="subjects">
					<div className="box">
						<div className="flex-start">
							<img src={english} alt="" />
							<h3>English</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={english} alt="" />
							<h3>English</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
				</div>
			</div>
		</StyledAddGrades>
	);
}
