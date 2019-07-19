import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyABm6F5cjhPxJ8qTM8Rj_6SWKUiDkLc_wQ',
	authDomain: 'schoolify-167f2.firebaseapp.com',
	databaseURL: 'https://schoolify-167f2.firebaseio.com',
	projectId: 'schoolify-167f2',
	storageBucket: '',
	messagingSenderId: '492037492142',
	appId: '1:492037492142:web:34e210afdf61f352'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
