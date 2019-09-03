export const createSchool = school => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection('schools')
			.add({
				...school,
				createdAt: new Date()
			})
			.then(() => {
				dispatch({ type: 'CREATE_SCHOOL', school });
			})
			.catch(err => {
				dispatch({ type: 'CREATE_SCHOOL_ERROR', err });
			});
	};
};
