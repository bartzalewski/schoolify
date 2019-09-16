import React from 'react';
import styled from 'styled-components';
import SchoolSumary from './SchoolSummary';

const StyledSchoolList = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 5px;
`;

export default function SchoolList({ schools }) {
	return (
		<StyledSchoolList>
			{schools &&
				schools.map(school => {
					return <SchoolSumary school={school} key={school.id} />;
				})}
		</StyledSchoolList>
	);
}
