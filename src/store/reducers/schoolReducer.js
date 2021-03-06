const initState = {
  schools: [
    {
      id: 1,
      schoolName: "SP3 im. Mikołaja Kopernika",
      schoolLogo: "asd",
      schoolBackground: "asd",
    },
    {
      id: 2,
      schoolName: "LO im. Władysława Jagiełły",
      schoolLogo: "asd",
      schoolBackground: "asd",
    },
    {
      id: 3,
      schoolName: "Przedskole nr 4",
      schoolLogo: "asd",
      schoolBackground: "asd",
    },
  ],
};

const schoolReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_SCHOOL":
      return state;
    case "CREATE_SCHOOL_ERROR":
      return state;
    default:
      return state;
  }
};

export default schoolReducer;
