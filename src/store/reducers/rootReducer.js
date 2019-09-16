import authReducer from './authReducer';
import postReducer from './postReducer';
import schoolReducer from './schoolReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	school: schoolReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
});

export default rootReducer;
