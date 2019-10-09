import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedIn from '../src/components/layout/SignedIn';
import SignedOut from '../src/components/layout/SignedOut';
import GlobalStyle from '../src/theme/globalStyle';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const DarkTheme = createGlobalStyle`
	body {
		background: ${props =>
			props.theme.mode === 'dark' ? '#282828' : '#EEE'} !important;
		color: ${props => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
	}

	aside, nav, section, .input-reminder, .input-reminder::placeholder, .input-homework, .input-homework::placeholder, .input-tests, .input-tests::placeholder, #schoolName, #schoolName::placeholder, #content, #content::placeholder {
		background: ${props =>
			props.theme.mode === 'dark' ? '#282828' : '#EEE'} !important;
		color: ${props => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
	}

	.posts-list, .add-post, .posts-btn, .lesson-box, .box-add, .school-list-page, .notification-item {
		background: ${props =>
			props.theme.mode === 'dark' ? '#1F1F1F' : '#EEE'} !important;
	}

	.box {
		fill: ${props => (props.theme.mode === 'dark' ? '#EEE' : '#000')} !important;
	}
`;

function App(props) {
	const { auth, profile } = props;
	const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;

	return (
		<BrowserRouter>
			<GlobalStyle />
			<ThemeProvider theme={{ mode: 'dark' }}>
				<>
					<DarkTheme />
					{links}
				</>
			</ThemeProvider>
		</BrowserRouter>
	);
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
};

export default connect(mapStateToProps)(App);
