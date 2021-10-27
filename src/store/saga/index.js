import { all, takeEvery } from "redux-saga/effects";
import {
  ADD_POST_REQUEST,
  DELETE_POST_REQUEST,
  EDIT_POST_REQUEST,
  GET_POSTS_REQUEST,
  TOGGLE_POST_REQUEST,
} from "./action";
import {
  getPostsSaga,
  addPostSaga,
  deletePostSaga,
  putPostSaga,
  togglePostSaga,
} from "./post";

// action을 감지하는 saga를 모아두는 함수입니다.
export function* postSaga() {
  yield takeEvery(GET_POSTS_REQUEST, getPostsSaga);
  yield takeEvery(ADD_POST_REQUEST, addPostSaga);
  yield takeEvery(DELETE_POST_REQUEST, deletePostSaga);
  yield takeEvery(EDIT_POST_REQUEST, putPostSaga);
  yield takeEvery(TOGGLE_POST_REQUEST, togglePostSaga);
}

// 스토어에 연결할 rootSaga입니다.
export default function* rootSaga() {
  yield all([postSaga()]);
}
