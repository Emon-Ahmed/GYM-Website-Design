import { classData } from "./customerSlice";

export const addClass = (data) => async (dispatch) => {
  fetch("https://nameless-plains-11584.herokuapp.com/addClass", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((info) => {
      console.log(data)
      if(info.insertedId){
        dispatch(getClass(data.email))

      }
    });
};

export const getClass = (data) => async (dispatch) => {
  const url = `https://nameless-plains-11584.herokuapp.com/getClass/${data}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dispatch(classData(data))
    })
};
