import {
  SUCCESS_SIGNIN,
  SUCCESS_SIGNOUT,
  SUCCESS_SIGNUP,
  FAIL_SIGNIN,
  FAIL_SIGNOUT,
  FAIL_SIGNUP,
} from "../actions/index";
const initialState = {
  email: "",
  userId: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_SIGNIN:
      return { ...state, email: action.email, userId: action.userId };

    case SUCCESS_SIGNUP:
      return { ...state };

    case FAIL_SIGNIN:
      return { ...state };

    case FAIL_SIGNUP:
      return { ...state };

    case FAIL_SIGNOUT:
      return { ...state };

    case SUCCESS_SIGNOUT:
      return { ...state, email: "", userId: null };

    default:
      return state;
  }
};
