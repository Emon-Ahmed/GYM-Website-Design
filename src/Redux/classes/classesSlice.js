import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: [],
  loading: false
};
export const classesSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    classesData: (data, action) => {
      data.classes = action.payload;
    },
    classesLoading: (data, action) => {
      data.loading = action.payload;
    },
  },
});
export const { classesData,  classesLoading } = classesSlice.actions;
export default classesSlice.reducer;
