import React from 'react';
import styled from 'styled-components';

const StyledSchoolSummary = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function SchoolSummary({ school }) {
	return (
		<StyledSchoolSummary>
			<div className="schools-list">
				<div className="flex">
					<img
						className="school-logo posts-logo"
						src={school.schoolLogo}
						alt="school logo"
					/>
					<h5 className="posts-title">{school.schoolName}</h5>
				</div>
				<img
					className="posts-img"
					src={school.schoolBackground}
					alt="school feed"
				/>
			</div>
		</StyledSchoolSummary>
	);
}
