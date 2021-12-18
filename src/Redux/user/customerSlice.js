import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: []
};
export const customerSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    classData: (data, action) => {
      data.orders = action.payload
    },
  },
});
export const { classData } = customerSlice.actions;
export default customerSlice.reducer;
