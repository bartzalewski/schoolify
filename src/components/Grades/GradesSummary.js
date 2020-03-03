import React from 'react';
import styled from 'styled-components';

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

	.grades-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 2rem 0;

		h1 {
			font-size: 2rem;
			margin: 2rem 0;
		}
	}

	.grades-table {
		display: flex;
		flex-direction: column;
		font-size: 14px;
		border-radius: 15px;
		border: 1px solid #ececf0;
		width: 100%;
		background-color: #fff;

		.grades-header {
			background: linear-gradient(90deg, #fe843f 0%, #fc5a37 100%);
			border-top-left-radius: 15px;
			border-top-right-radius: 15px;
			width: 100%;
			font-weight: bold;
			color: white;
			height: 42px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.flex {
			display: flex;
			justify-content: space-between;

			.grades-grade {
				color: #fff;
				font-weight: 600;
				width: 1.5rem;
				height: 1.5rem;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 0.125rem;
				border-radius: 5px;
			}

			.grades-grade-quiz {
				background: #4caf50;
			}

			.grades-grade-test {
				background: #f44336;
			}

			.grades-number {
				font-weight: 600;
				width: 20% !important;
			}

			.class-subheader {
				font-weight: 600;
			}

			.grades-subject {
				width: 20% !important;
			}

			.grades-number,
			.grades-subject,
			.grades-grades {
				width: 100%;
			}

			.grades-number-item,
			.grades-subject-item,
			.grades-grades-item {
				height: 42px;
				border: 1px solid #ececf0;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.grades-grades-item {
				border-right: none;
			}

			.grades-number-item {
				border-left: none;
			}
		}
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
				<h1>Your grades</h1>
				<div className="grades-wrapper">
					<div className="grades-table">
						<div className="grades-header">Grades</div>
						<div className="flex">
							<div className="grades-number">
								<div className="grades-number-item class-subheader">No</div>
								<div className="grades-number-item">1</div>
								<div className="grades-number-item class-border-bottom-none">
									2
								</div>
							</div>
							<div className="grades-subject">
								<div className="grades-subject-item class-subheader">
									Subject
								</div>
								<div className="grades-subject-item">j.pol</div>
								<div className="grades-subject-item class-border-bottom-none">
									mat
								</div>
							</div>
							<div className="grades-grades">
								<div className="grades-grades-item class-subheader">Grades</div>
								<div className="grades-grades-item">
									<span className="grades-grade grades-grade-quiz">5</span>
									<span className="grades-grade grades-grade-quiz">2</span>
									<span className="grades-grade grades-grade-quiz">3</span>
									<span className="grades-grade grades-grade-test">4</span>
								</div>
								<div className="grades-grades-item class-border-bottom-none">
									<span className="grades-grade grades-grade-quiz">3</span>
									<span className="grades-grade grades-grade-test">2</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledGradesSummary>
	);
}
