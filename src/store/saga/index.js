import { all, takeEvery } from "redux-saga/effects";
import {
  POST_SIGNIN_REQUEST,
  POST_SIGNUP_REQUEST,
  CHANGE_PASSWORD_REQUEST,
} from "../actions/index";
import {
  DELETE_TODO_REQUEST,
  GET_COMPELETED_TODOS_REQUEST,
  GET_TODOS_REQUEST,
  GET_UNCOMPLETED_TODOS_REQUEST,
  POST_TODO_REQUEST,
  PUT_TODO_REQUEST,
  PUT_TOGGLE_REQUEST,
} from "../actions/todoAction";
import { changePasswordSaga, postSignInSaga, postSignUpSaga } from "./auth";
import {
  addPostSaga,
  deletePostSaga,
  getCompletedPostsSaga,
  getPostsSaga,
  getUncompletedPostsSaga,
  putPostSaga,
  togglePostSaga,
} from "./post";

// action을 감지하는 saga를 모아두는 함수입니다.
export function* postSaga() {
  yield takeEvery(GET_TODOS_REQUEST, getPostsSaga);
  yield takeEvery(GET_COMPELETED_TODOS_REQUEST, getCompletedPostsSaga);
  yield takeEvery(GET_UNCOMPLETED_TODOS_REQUEST, getUncompletedPostsSaga);
  yield takeEvery(POST_TODO_REQUEST, addPostSaga);
  yield takeEvery(DELETE_TODO_REQUEST, deletePostSaga);
  yield takeEvery(PUT_TODO_REQUEST, putPostSaga);
  yield takeEvery(PUT_TOGGLE_REQUEST, togglePostSaga);
}

export function* authSaga() {
  yield takeEvery(POST_SIGNUP_REQUEST, postSignUpSaga);
  yield takeEvery(POST_SIGNIN_REQUEST, postSignInSaga);
  yield takeEvery(CHANGE_PASSWORD_REQUEST, changePasswordSaga);
}

// 스토어에 연결할 rootSaga입니다.
export default function* rootSaga() {
  yield all([postSaga(), authSaga()]);
}
