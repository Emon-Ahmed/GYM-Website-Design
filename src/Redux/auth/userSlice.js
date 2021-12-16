import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (data, action) => {
      data.user = action.payload
    },
  },
});
export const { userData } = userSlice.actions;
export default userSlice.reducer;
