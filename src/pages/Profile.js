import React from 'react';
import styled from 'styled-components';

const StyledProfile = styled.section`
	width: 50vw;
	background: #ececf0;

	h1 {
		padding: 40px;
		font-size: 1.625rem;
		font-weight: 600;
	}
`;

const Profile = props => {
	console.log(props);
	return (
		<StyledProfile>
			<h1>Profile</h1>
		</StyledProfile>
	);
};

export default Profile;
