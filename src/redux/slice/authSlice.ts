import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  userId: null,
  //userImage
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpRequest: (state) => state,
    signUpSuccess: (state, action) => action.payload,
    signUpFailure: (state, action) => action.payload,

    signInRequest: (state) => state,
    signInSuccess: (state, action) => action.payload,
    signInFailure: (state, action) => action.payload,

    signOutRequest: (state) => state,
    signOutSuccess: (state, action) => initialState,
    signOutFailure: (state, action) => initialState,

    changePasswordRequest: (state) => state,
    changePasswordSuccess: (state, action) => state,
    changePasswordFailure: (state, action) => state,
  },
});

const { reducer, actions } = authSlice;

export const {
  changePasswordFailure,
  changePasswordRequest,
  changePasswordSuccess,
  signInFailure,
  signInRequest,
  signInSuccess,
  signOutFailure,
  signOutRequest,
  signOutSuccess,
  signUpFailure,
  signUpRequest,
  signUpSuccess,
} = actions;

export default reducer;
