const initState = {
	schools: [
		{
			id: 1,
			schoolName: 'SP3 im. Mikołaja Kopernika',
			schoolLogo: '',
			schoolBackground: ''
		},
		{
			id: 2,
			schoolName: 'LO im. Władysława Jagiełły',
			schoolLogo: '',
			schoolBackground: ''
		},
		{
			id: 3,
			schoolName: 'Przedskole nr 4',
			schoolLogo: '',
			schoolBackground: ''
		}
	]
};

const schoolReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_SCHOOL':
			console.log('Created school!', action.add);
			return state;
		case 'CREATE_SCHOOL_ERROR':
			console.log('Created school error!', action.err);
			return state;
		default:
			return state;
	}
};

export default schoolReducer;
