import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';

const StyledSettings = styled.section`
	width: 50vw;
	background: #ececf0;

	h1 {
		font-size: 1.625rem;
		font-weight: 600;
	}

	.container {
		padding: 40px;
	}
`;

const Settings = props => {
	return (
		<StyledSettings>
			<div className="container">
				<h1>Settings</h1>
				<Link to="/">
					<p onClick={props.signOut}>Log Out</p>
				</Link>
			</div>
		</StyledSettings>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut())
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Settings);
