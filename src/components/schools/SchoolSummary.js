import React from 'react';
import styled from 'styled-components';

const StyledSchoolSummary = styled.div`
	.box {
		height: 250px;
		background-color: white;
		border-radius: 15px;
		transition: 0.2s;
		position: relative;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}

	.school-bg {
		width: 100%;
		height: 250px;
		border-radius: 15px;
		user-select: none;
		position: absolute;
		object-fit: cover;
	}

	.school-logo {
		width: 50px;
		height: 50px;
		position: absolute;
		border-radius: 100px;
		margin: 0.5em;
		user-select: none;
		z-index: 1;
	}

	.school-title-container {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.8);
		border-radius: 15px;
		color: #fff;
		visibility: hidden;
		opacity: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.2s, visibility 0.2s;
	}

	.box:hover .school-title-container {
		visibility: visible;
		opacity: 1;
	}

	.box:hover .school-title {
		transform: translateY(0);
	}

	.box:hover .school-logo {
		opacity: 0.1;
		transition: 0.2s;
	}

	.school-title {
		transition: 0.2s;
		transform: translateY(1em);
		text-align: center;
		user-select: none;
	}

	@media (max-width: 813px) {
		.box {
			height: 125px;
		}
		.school-bg {
			height: 125px;
		}
		.school-logo {
			width: 40px;
			height: 40px;
		}
		.school-title {
			font-size: 0.7rem;
		}
	}
`;

export default function SchoolSummary({ school }) {
	return (
		<StyledSchoolSummary>
			<div className="box">
				<img
					className="school-logo"
					src={school.schoolLogo}
					alt="school logo"
				/>
				<div className="school-bg-container">
					<img
						className="school-bg"
						src={school.schoolBackground}
						alt="school background"
					/>
					<div className="school-title-container">
						<h5 className="school-title">{school.schoolName}</h5>
					</div>
				</div>
			</div>
		</StyledSchoolSummary>
	);
}
