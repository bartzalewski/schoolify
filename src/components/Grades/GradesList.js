import React from 'react';
import styled from 'styled-components';
import GradesSummary from './GradesSummary';

const StyledGradesList = styled.div``;

export default function GradesList() {
	return (
		<StyledGradesList>
			<GradesSummary />
		</StyledGradesList>
	);
}
