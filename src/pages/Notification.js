import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ViewNotification from '../pages/ViewNotification';

class Notification extends Component {
	render() {
		const { notifications } = this.props;
		return <ViewNotification notifications={notifications} />;
	}
}

const mapStateToProps = state => {
	return {
		notifications: state.firestore.ordered.notifications
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'notifications', limit: 20, orderBy: ['time', 'desc'] }
	])
)(Notification);
