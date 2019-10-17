import React from 'react';
import styled from 'styled-components';
import english from '../../images/subjects/english.svg';

const StyledGradesSummary = styled.div`
	width: 50vw;
	background: #ececf0;

	.container {
		padding: 40px;
	}

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
	}

	img {
		width: 150px;
		height: 150px;
	}

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2rem 0;
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
	}
`;

export default function GradesSummary() {
	return (
		<StyledGradesSummary className="grades-summary-page">
			<div className="container">
				<h1>English</h1>
				<div className="wrapper">
					<img src={english} alt="english subject" />
				</div>
			</div>
		</StyledGradesSummary>
	);
}
