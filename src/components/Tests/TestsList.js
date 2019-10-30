import React from 'react';
import styled from 'styled-components';

const StyledTestsList = styled.div``;

const TestList = ({ tests, removeTest }) => {
	const testList = tests.length ? (
		tests.map(test => {
			return (
				<StyledTestsList className="tests-item" key={test} onClick={removeTest}>
					{test}
				</StyledTestsList>
			);
		})
	) : (
		<span>You have no tests</span>
	);
	return <div id="tests-list">{testList}</div>;
};

export default TestList;
