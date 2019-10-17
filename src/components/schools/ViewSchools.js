import React, { Component } from 'react';
import styled from 'styled-components';
import SchoolList from './SchoolList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const StyledViewSchools = styled.div`
	width: 50vw;
	background: #ececf0;

	.container {
		padding: 40px;
	}

	h1 {
		font-size: 1.625rem;
		user-select: none;
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

		h1 {
			font-size: 1.2rem;
		}
	}
`;

class ViewSchools extends Component {
	render() {
		const { schools } = this.props;
		return (
			<StyledViewSchools className="school-list-page">
				<div className="container">
					<h1>School list</h1>
					<SchoolList schools={schools} />
				</div>
			</StyledViewSchools>
		);
	}
}

const mapStateToProps = state => {
	return {
		schools: state.firestore.ordered.schools
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'schools', orderBy: ['createdAt', 'desc'] }])
)(ViewSchools);
