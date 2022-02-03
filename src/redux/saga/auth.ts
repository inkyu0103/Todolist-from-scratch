import CustomAxios from "../../utils/api";
import { put, call } from "redux-saga/effects";
import { setAuthToken } from "../../utils/api";
import jwtDecode from "jwt-decode";
import { history } from "../store";
import { ChangePasswordForm } from "../../Interface/auth";
import {
  changeProfileImageRequest,
  changeProfileImageSuccess,
  signInRequest,
  signInSuccess,
  signUpRequest,
} from "../slice/authSlice";

export function* signUpSaga({
  payload: { email, password },
}: ReturnType<typeof signUpRequest>) {
  try {
    yield call(CustomAxios.post, "/auth/signup", {
      email,
      password,
    });
    history.push("/login");
  } catch (e) {
    alert("회원가입에 실패하였습니다.");
  }
}

export function* signInSaga({
  payload: { email, password },
}: ReturnType<typeof signInRequest>) {
  try {
    const { accessToken } = yield call(CustomAxios.post, "/auth/signin", {
      email,
      password,
    });
    const { email: loggedEmail, id: userId } = yield jwtDecode(accessToken);
    yield call(setAuthToken, accessToken);
    yield put(signInSuccess({ email: loggedEmail, userId }));
    history.push(`/${userId}`);
  } catch (e) {
    alert("로그인에 실패했습니다.");
    console.log(e);
  }
}

export function* silentSignInSaga() {
  try {
    // api return type {accessToken: string | null}
    const { accessToken } = yield call(CustomAxios.get, "/auth/silent-signin");

    if (!accessToken) {
      history.push("/login");
    } else {
      const { email, id: userId } = yield jwtDecode(accessToken);
      yield call(setAuthToken, accessToken);
      yield put(signInSuccess({ email, userId }));
    }
  } catch (e) {
    alert("로그인에 실패했습니다.");
    console.log(e);
  }
}

// 기능 추가해야함
export function* signOutSaga() {
  try {
    yield call(CustomAxios.get, "/auth/signout");
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

export function* changeProfileImageSaga({
  payload,
}: ReturnType<typeof changeProfileImageRequest>) {
  try {
    const { display_url: profileImageUrl, userId } = payload;
    yield call(CustomAxios.put, `/auth/${userId}/profile-image`, {
      profileImageUrl,
    });

    yield put(changeProfileImageSuccess(payload));
  } catch (e) {
    console.log(e);
  }
}
