import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import english from '../../images/subjects/english.svg';
import german from '../../images/subjects/german.svg';
import spanish from '../../images/subjects/spanish.svg';
import math from '../../images/subjects/math.svg';
import physics from '../../images/subjects/physics.svg';
import bio from '../../images/subjects/bio.svg';
import religion from '../../images/subjects/religion.svg';
import it from '../../images/subjects/it.svg';
import pe from '../../images/subjects/pe.svg';
import eco from '../../images/subjects/eco.svg';
import geo from '../../images/subjects/geo.svg';
import chem from '../../images/subjects/chem.svg';
import history from '../../images/subjects/history.svg';
import { ReactComponent as Add } from '../../images/add.svg';

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
	svg,
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
			text-decoration: none;
			color: inherit;
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

	@media (max-width: 542px) {
		.box {
			padding: 5px 10px;

			img,
			svg {
				width: 20px;
				height: 20px;
			}

			h3,
			button {
				font-size: 0.8rem;
			}

			button {
				padding: 0px 10px;
				margin: 0.1rem;
			}
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
						<Link to="/grade" className="flex-start">
							<img src={english} alt="" />
							<h3>English</h3>
						</Link>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={german} alt="" />
							<h3>German</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={spanish} alt="" />
							<h3>Spanish</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={math} alt="" />
							<h3>Math</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={physics} alt="" />
							<h3>Physics</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={bio} alt="" />
							<h3>Biology</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={religion} alt="" />
							<h3>Religion</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={it} alt="" />
							<h3>Informatics</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={pe} alt="" />
							<h3>Physical Education</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={eco} alt="" />
							<h3>Economy</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={geo} alt="" />
							<h3>Geography</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={chem} alt="" />
							<h3>Chemistry</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<img src={history} alt="" />
							<h3>History</h3>
						</div>
						<div className="flex-end">
							<button>Add</button>
							<button className="remove">Remove</button>
						</div>
					</div>
					<div className="box">
						<div className="flex-start">
							<Add />
							<h3>New Grade</h3>
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
