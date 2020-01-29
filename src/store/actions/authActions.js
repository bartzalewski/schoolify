export const signIn = credentials => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch({ type: 'LOGIN_SUCCESS' });
			})
			.catch(err => {
				dispatch({ type: 'LOGIN_ERROR', err });
			});
	};
};

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: 'SIGNOUT_SUCCESS' });
			});
	};
};

export const signUp = newUser => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();
		var provider = new firebase.auth.FacebookAuthProvider();

		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then(resp => {
				return firestore
					.collection('users')
					.doc(resp.user.uid)
					.set({
						firstName: newUser.firstName,
						lastName: newUser.lastName,
						userAvatar: newUser.userAvatar,
						email: newUser.email,
						accountType: 'student',
						homework: ['Math: ex.1, p.5', 'English: ex.1, p.6'],
						reminders: [
							'Get organized!',
							'Do your homework!',
							'Click me to remove me!'
						],
						tests: ['02-01-2020 | Math | Geometry']
					});
			})
			.then(() => {
				dispatch({ type: 'SIGNUP_SUCCESS' });
			})
			.catch(err => {
				dispatch({ type: 'SIGNUP_ERROR', err });
			});

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				var token = result.credential.accessToken;
				var user = result.user; // signed-in user info

				provider.setCustomParameters({
					display: 'popup'
				});

				return firestore
					.collection('users')
					.doc(result.user.uid)
					.set({
						firstName: user.displayName.split(' ')[0],
						lastName: user.displayName.split(' ')[1],
						userAvatar: user.photoURL,
						email: user.email,
						accountType: 'student',
						homework: ['Math: ex.1, p.5', 'English: ex.1, p.6'],
						reminders: [
							'Get organized!',
							'Do your homework!',
							'Click me to remove me!'
						],
						tests: ['02-01-2020 | Math | Geometry']
					});
			})
			.then(() => {
				dispatch({ type: 'SIGNUP_SUCCESS' });
			})
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
	};
};
