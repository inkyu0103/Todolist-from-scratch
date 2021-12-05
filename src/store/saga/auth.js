import CustomAxios from "../../utils/api";
import { put, call } from "redux-saga/effects";
import { setAuthToken } from "../../utils/api";
import { SEND_SUCCESS_SIGNIN } from "../actions/index";
import jwtDecode from "jwt-decode";
import { history } from "../store";

export function* postSignUpSaga({ email, password }) {
  try {
    const result = yield call(CustomAxios.post, "/auth/signup", {
      email,
      password,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* postSignInSaga({ email, password }) {
  try {
    const { accessToken } = yield call(CustomAxios.post, "/auth/signin", {
      email,
      password,
    });
    const { email: result, id: userId } = yield jwtDecode(accessToken);
    yield call(setAuthToken, accessToken);
    yield put(SEND_SUCCESS_SIGNIN({ email: result, userId }));
    history.push(`/${userId}`);
  } catch (e) {
    console.log(e);
  }
}

export function* changePasswordSaga({ id, current, changed }) {
  try {
    yield call(CustomAxios.put, "/auth/password", { id, current, changed });
    history.goBack();
  } catch (e) {}
}
