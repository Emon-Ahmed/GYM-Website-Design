import { classesData, classesLoading } from "./classesSlice";

export const getClasses = (data) => async (dispatch) => {
  dispatch(classesLoading(true))

  fetch("http://localhost:5000/classes")
    .then((res) => res.json())
    .then((data) => {
      dispatch(classesData(data));
      dispatch(classesLoading(false));
    });
};
