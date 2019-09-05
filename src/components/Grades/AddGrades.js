import React from 'react';
import styled from 'styled-components';

const StyledAddGrades = styled.div`
	width: 50vw;
	background: #ececf0;

	.container {
		padding: 40px;
	}

	h1 {
		font-size: 1.625rem;
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
	}
`;

export default function AddGrades() {
	return (
		<StyledAddGrades>
			<div className="container">
				<h1>Add a grade</h1>
			</div>
		</StyledAddGrades>
	);
}
