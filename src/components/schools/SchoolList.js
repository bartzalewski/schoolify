import React from 'react';
import styled from 'styled-components';
import SchoolSummary from './SchoolSummary';

const StyledSchoolList = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 5px;
	margin-top: 2rem;

	@media (max-width: 813px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export default function SchoolList({ schools }) {
	return (
		<StyledSchoolList>
			{schools &&
				schools.map(school => {
					return <SchoolSummary school={school} key={school.id} />;
				})}
		</StyledSchoolList>
	);
}
