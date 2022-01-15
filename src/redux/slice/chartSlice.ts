import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    getChart: (state, action) => action.payload,
  },
});
