export const createSchool = (school) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("schools")
      .add({
        ...school,
        schoolId: 123,
        createdAt: new Date(),
        reminders: [
          "use a planner",
          "get enough sleep",
          "get organized",
          "lay out your outfit before",
        ],
        homework: [
          "Math: ex.1, p.5",
          "English: ex.1, p.6",
          "Spanish: ex.1, p.3",
        ],
        tests: [
          "01-09-2019 | Math | Geometry",
          "02-09-2019 | Biology | Anatomy",
          "03-09-2019 | Spanish | Things at home",
          "04-09-2019 | English | Essay",
        ],
      })
      .then(() => {
        dispatch({ type: "CREATE_SCHOOL", school });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_SCHOOL_ERROR", err });
      });
  };
};
