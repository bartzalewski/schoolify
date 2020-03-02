import React from 'react';
import styled from 'styled-components';

const StyledTeacherPanel = styled.section``;

const TeacherPanel = props => {
	return (
		<StyledTeacherPanel className="site-container">
			<div className="container">
				<h1>Teacher Panel</h1>
				<p>Test</p>
			</div>
		</StyledTeacherPanel>
	);
};

export default TeacherPanel;
