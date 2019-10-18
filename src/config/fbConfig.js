import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/performance';

var firebaseConfig = {
	apiKey: 'AIzaSyABm6F5cjhPxJ8qTM8Rj_6SWKUiDkLc_wQ',
	authDomain: 'schoolify-167f2.firebaseapp.com',
	databaseURL: 'https://schoolify-167f2.firebaseio.com',
	projectId: 'schoolify-167f2',
	storageBucket: 'schoolify-167f2.appspot.com',
	messagingSenderId: '492037492142',
	appId: '1:492037492142:web:34e210afdf61f352'
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
const perf = firebase.performance();

export { storage, db, perf, firebase as default };
