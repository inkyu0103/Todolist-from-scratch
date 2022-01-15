// catch Redux - saga
export const POST_SIGNIN_REQUEST = "POST_SIGNIN_REQUEST";
export const POST_SIGNUP_REQUEST = "POST_SIGNUP_REQUEST";
export const POST_SILENT_REQUEST = "POST_SILENT_REQUEST";
export const POST_SIGNOUT_REQUEST = "POST_SIGNOUT_REQUEST";
export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";

// catch Reducer
export const SUCCESS_SIGNIN = "SUCCESS_SIGNIN";
export const SUCCESS_SIGNUP = "SUCCESS_SIGNUP";
export const FAIL_SIGNIN = "FAIL_SIGNIN";
export const FAIL_SIGNUP = "FAIL_SIGNUP";
export const SUCCESS_SIGNOUT = "SUCCESS_SIGNOUT";
export const FAIL_SIGNOUT = "FAIL_SIGNOUT";
export const SUCCESS_CHANGE_PASSWORD = "SUCCESS_CHANGE_PASSWORD";
export const FAIL_CHANGE_PASSWORD = "FAIL_CHANGE_PASSWORD";

// redux saga 내부에서 put 하는 함수들
export const SEND_SUCCESS_SIGNIN = ({ email, userId }) => ({
  type: SUCCESS_SIGNIN,
  email,
  userId,
});
export const SEND_SUCCESS_SIGNUP = () => ({ type: SUCCESS_SIGNUP });

export const SEND_FAIL_SIGNIN = () => ({ type: FAIL_SIGNIN });
export const SEND_FAIL_SIGNUP = () => ({ type: FAIL_SIGNUP });

export const SEND_SUCCESS_SIGNOUT = () => ({ type: SUCCESS_SIGNOUT });
export const SEND_FAIL_SIGNOUT = () => ({ type: FAIL_SIGNOUT });

// 컴포넌트에서 dispatch 하는 함수들
export const signInRequest = ({ email, password }) => ({
  type: POST_SIGNIN_REQUEST,
  email,
  password,
});
export const signUpRequest = ({ email, password }) => ({
  type: POST_SIGNUP_REQUEST,
  email,
  password,
});
export const signOutRequest = () => ({ type: POST_SIGNOUT_REQUEST });

export const silentSignIn = () => ({ type: POST_SILENT_REQUEST });

export const changePasswordRequest = ({ id, current, changed }) => ({
  type: CHANGE_PASSWORD_REQUEST,
  id,
  current,
  changed,
});