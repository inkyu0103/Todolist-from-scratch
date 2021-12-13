import CustomAxios from "../../utils/api";
import { put, call } from "redux-saga/effects";
import { setAuthToken } from "../../utils/api";
import { SEND_SUCCESS_SIGNIN } from "../actions/index";
import jwtDecode from "jwt-decode";
import { history } from "../store";

export function* postSignUpSaga({ email, password }) {
  try {
    yield call(CustomAxios.post, "/auth/signup", { email, password });
    history.push("/login");
  } catch (e) {
    alert("회원가입에 실패하였습니다.");
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
    alert("로그인에 실패했습니다.");
    console.log(e);
  }
}

export function* changePasswordSaga({ id, current, changed }) {
  try {
    yield call(CustomAxios.put, "/auth/password", { id, current, changed });
    alert("변경에 성공하였습니다.");
    history.goBack();
  } catch (e) {
    alert("변경에 실패하였습니다.");
    console.log(e);
  }
}
