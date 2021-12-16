import { userData } from "./userSlice";

export const userLoggedIn = (data) => async (dispatch) => {
    dispatch(userData(data));
  };
