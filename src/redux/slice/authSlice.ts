import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  userId: null,
  profileImageUrl: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpRequest: (state, action) => state,
    signUpSuccess: (state, action) => action.payload,
    signUpFailure: (state, action) => action.payload,

    signInRequest: (state, action) => state,
    signInSuccess: (state, action) => action.payload,
    signInFailure: (state, action) => action.payload,

    signOutRequest: (state, action) => state,
    signOutSuccess: (state, action) => initialState,
    signOutFailure: (state, action) => initialState,

    changePasswordRequest: (state, action) => state,
    changePasswordSuccess: (state, action) => state,
    changePasswordFailure: (state, action) => state,

    silentLoginRequest: (state) => state,
    silentLoginSuccess: (state, action) => action.payload,
    silentLoginFailure: (state, action) => state,

    changeProfileImageRequest: (state, action) => state,
    changeProfileImageSuccess: (state, { payload: { display_url } }) => {
      state.profileImageUrl = display_url;
    },
    changeProfileImageFailure: (state) => state,
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
  silentLoginRequest,
  silentLoginSuccess,
  silentLoginFailure,
  changeProfileImageFailure,
  changeProfileImageRequest,
  changeProfileImageSuccess,
} = actions;

export default reducer;
