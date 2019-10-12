import React, { Component } from 'react';
import styled from 'styled-components';
import { ReactComponent as Add } from '../../images/add.svg';
import { Link } from 'react-router-dom';
import GradesList from './GradesList';

const StyledGrades = styled.aside`
	width: 25vw;
	height: calc(50% - 50px);
	padding: 25px;
	border-right: 1px solid #d2d2d2;
	position: fixed;
	background: #fff;
	bottom: 0;

	.title {
		font-size: 2rem;
		font-weight: 600;
		user-select: none;
	}

	a {
		transition: 0.2s;

		&:hover {
			transform: scale(1.1);
			transition: 0.2s;
		}
	}

	.add {
		width: 40px;
		height: 40px;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	img,
	svg {
		height: 40px;
		margin: 10px;
		cursor: pointer;
	}

	.subjects {
		margin-left: -10px;
		width: 104%;
	}

	@media (max-width: 1359px) {
		padding: 12.5px;
		height: calc(50% - 30px);

		.title {
			font-size: 1.5rem;
		}

		img,
		.add {
			height: 30px;
		}
	}

	@media (max-width: 1124px) {
		position: static;
		top: 0px;
		width: 100%;
		border: none;
		text-align: center;
		padding: 3.375px;

		.container {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.title {
			font-size: 1rem;
		}
	}
`;

class Grades extends Component {
	state = {
		active: false
	};
	isHidden = () => {
		this.setState({
			active: !this.state.active
		});
	};
	render() {
		return (
			<StyledGrades>
				<div className="container">
					<h1 onClick={this.isHidden} className="title">
						Grades
					</h1>
					{!this.state.active && (
						<Link to="/add-grade">
							<Add className="add"></Add>
						</Link>
					)}
				</div>
				{!this.state.active && (
					<div className="subjects">
						<GradesList />
					</div>
				)}
			</StyledGrades>
		);
	}
}

export default Grades;
