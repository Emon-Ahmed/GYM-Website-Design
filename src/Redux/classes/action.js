import { classesData, classesLoading } from "./classesSlice";

export const getClasses = (data) => async (dispatch) => {
  dispatch(classesLoading(true))

  fetch("https://nameless-plains-11584.herokuapp.com/classes")
    .then((res) => res.json())
    .then((data) => {
      dispatch(classesData(data));
      dispatch(classesLoading(false));
    });
};
