import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SignedIn from '../src/components/layout/SignedIn';
import SignedOut from '../src/components/layout/SignedOut';
import { connect } from 'react-redux';

function App(props) {
	console.log(props);
	const { auth, profile } = props;
	const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;

	return <BrowserRouter>{links}</BrowserRouter>;
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
};

export default connect(mapStateToProps)(App);
