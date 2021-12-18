import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: true
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (data, action) => {
      data.user = action.payload
    },
    userLoading: (data, action) => {
      data.loading = action.payload
    },
  },
});
export const { userData, userLoading } = userSlice.actions;
export default userSlice.reducer;
