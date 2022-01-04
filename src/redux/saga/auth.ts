import CustomAxios from "../../utils/api";
import { put, call } from "redux-saga/effects";
import { setAuthToken } from "../../utils/api";
import { SEND_SUCCESS_SIGNIN, SEND_SUCCESS_SIGNOUT } from "../actions/index";
import jwtDecode from "jwt-decode";
import { history } from "../store";
import {
  ChangePasswordForm,
  SignInForm,
  SignUpForm,
} from "../../Interface/auth";

export function* postSignUpSaga({
  email,
  password,
}: SignUpForm & { type: string }) {
  try {
    yield call(CustomAxios.post, "/auth/signup", { email, password });
    history.push("/login");
  } catch (e) {
    alert("회원가입에 실패하였습니다.");
    console.log(e);
  }
}

export function* postSignInSaga({
  email,
  password,
}: SignInForm & { type: string }) {
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
    alert("로그인에 실패했습니다.");
    console.log(e);
  }
}

export function* postSilentSignInSaga() {
  try {
    // api return type {accessToken: string | null}
    const { accessToken } = yield call(CustomAxios.get, "/auth/silent-signin");

    // null is falsy?
    if (!accessToken) {
      history.push("/login");
    } else {
      const { email, id: userId } = yield jwtDecode(accessToken);
      yield call(setAuthToken, accessToken);
      yield put(SEND_SUCCESS_SIGNIN({ email, userId }));
    }
  } catch (e) {}
}

export function* postSignOutSaga() {
  try {
    yield call(CustomAxios.get, "/auth/signout");
    yield put(SEND_SUCCESS_SIGNOUT());
    history.push("/");
  } catch (e) {
    alert("에러");
  }
}

export function* changePasswordSaga({
  id,
  currentPassword,
  changedPassword,
}: ChangePasswordForm & { type: string }) {
  try {
    yield call(CustomAxios.put, "/auth/password", {
      id,
      currentPassword,
      changedPassword,
    });
    alert("변경에 성공하였습니다.");
    history.goBack();
  } catch (e) {
    alert("변경에 실패하였습니다.");
    console.log(e);
  }
}
