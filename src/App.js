import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedIn from '../src/components/layout/SignedIn';
import SignedOut from '../src/components/layout/SignedOut';
import GlobalStyle from '../src/theme/globalStyle';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const DarkTheme = createGlobalStyle`
	body, section, .school-list-page, .add-grades-page, .grades-summary-page {
		background: ${props =>
			props.theme.mode === 'dark' ? '#141414' : null} !important;
		color: ${props => (props.theme.mode === 'dark' ? '#EEE' : null)};
	}

	aside, nav, .input-reminder, .input-reminder::placeholder, .input-homework, .input-homework::placeholder, .input-tests, .input-tests::placeholder, #schoolName, #schoolName::placeholder, #content, #content::placeholder {
		background: ${props =>
			props.theme.mode === 'dark' ? '#1F1F1F' : null} !important;
		color: ${props => (props.theme.mode === 'dark' ? '#EEE' : null)};
	}

	.posts-list, .add-post, .posts-btn, .lesson-box, .box-add, .notification-item, .add-grades-box, .box-error-page {
		background: ${props =>
			props.theme.mode === 'dark' ? '#0a0a0a' : null} !important;
	}

	.box {
		fill: ${props => (props.theme.mode === 'dark' ? '#EEE' : null)} !important;
	}
`;

function App(props) {
	const { auth, profile } = props;
	const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;

	return (
		<BrowserRouter>
			<GlobalStyle />
			<ThemeProvider theme={{ mode: 'light' }}>
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
