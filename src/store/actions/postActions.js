export const createPost = post => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection('posts')
			.add({
				...post,
				authorId: 12345,
				createdAt: new Date()
			})
			.then(() => {
				dispatch({ type: 'CREATE_POST', post });
			})
			.catch(err => {
				dispatch({ type: 'CREATE_POST_ERROR', err });
			});
	};
};
