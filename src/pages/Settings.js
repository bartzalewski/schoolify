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

	.btn-logout {
		border-radius: 10px;
		background: -webkit-linear-gradient(left, #fe843f, #fc5a37);
		color: #fff;
		font-weight: 600;
		border: none;
		height: 50px;
		width: fit-content;
		font-size: 1.125rem;
		cursor: pointer;
		padding: 10px 25px;
		margin-top: 20px;
		position: absolute;
	}

	/* same as <Link> */
	a {
		text-decoration: none;
	}
`;

const Settings = props => {
	return (
		<StyledSettings>
			<div className="container">
				<h1>Settings</h1>
				<Link to="/">
					<span onClick={props.signOut} className="btn-logout">
						Log Out
					</span>
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
