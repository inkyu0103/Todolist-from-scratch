import { all, takeEvery } from "redux-saga/effects";
import {
  getPostsSaga,
  addPostSaga,
  deletePostSaga,
  putPostSaga,
  togglePostSaga,
} from "./post";

export function* postSaga() {
  yield takeEvery("GET_POSTS_REQUEST", getPostsSaga);
  yield takeEvery("ADD_POST_REQUEST", addPostSaga);
  yield takeEvery("DELETE_POST_REQUEST", deletePostSaga);
  yield takeEvery("EDIT_POST_REQUEST", putPostSaga);
  yield takeEvery("TOGGLE_POST_REQUEST", togglePostSaga);
}

export default function* rootSaga() {
  yield all([postSaga()]);
}
