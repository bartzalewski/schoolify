import React from 'react';
import styled from 'styled-components';

const StyledSchoolSummary = styled.div`
	.box {
		height: 250px;
		background-color: white;
		border-radius: 15px;
		border: 1px solid #d2d2d2;
		transition: 0.2s;
		margin-top: 2rem;

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
	}

	.school-logo {
		width: 50px;
		height: 50px;
		position: absolute;
		border-radius: 100px;
		margin: 0.5em;
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
	}
`;

export default function SchoolSummary({ school }) {
	return (
		<StyledSchoolSummary>
			<div className="box">
				<img
					className="school-logo posts-logo"
					src={school.schoolLogo}
					alt="school logo"
				/>
				<img
					className="school-bg"
					src={school.schoolBackground}
					alt="school background"
				/>
				<h5 className="posts-title">{school.schoolName}</h5>
			</div>
		</StyledSchoolSummary>
	);
}
