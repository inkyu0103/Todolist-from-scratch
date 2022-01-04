import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => action.payload,
    signOut: (state, action) => initialState,
  },
});
