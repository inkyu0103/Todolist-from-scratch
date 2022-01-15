import { all, takeEvery } from "redux-saga/effects";
import {
  changePasswordRequest,
  signInRequest,
  signOutRequest,
  signUpRequest,
  silentLoginRequest,
} from "../slice/authSlice";
import {
  addTodoRequest,
  deleteTodoRequest,
  editTodoRequest,
  getTodosRequest,
  toggleTodoRequest,
} from "../slice/todoSlice";
import {
  changePasswordSaga,
  signInSaga,
  signOutSaga,
  signUpSaga,
  silentSignInSaga,
} from "./auth";
import {
  addTodoSaga,
  deleteTodoSaga,
  getTodosSaga,
  editTodoSaga,
  toggleTodoSaga,
} from "./todo";

// action을 감지하는 saga를 모아두는 함수입니다.
export function* todoSaga() {
  yield takeEvery(getTodosRequest, getTodosSaga);
  yield takeEvery(toggleTodoRequest, toggleTodoSaga);
  yield takeEvery(addTodoRequest, addTodoSaga);
  yield takeEvery(deleteTodoRequest, deleteTodoSaga);
  yield takeEvery(editTodoRequest, editTodoSaga);
}

export function* authSaga() {
  yield takeEvery(signUpRequest, signUpSaga);
  yield takeEvery(signInRequest, signInSaga);
  yield takeEvery(changePasswordRequest.type, changePasswordSaga);
  yield takeEvery(silentLoginRequest.type, silentSignInSaga);
  yield takeEvery(signOutRequest.type, signOutSaga);
}

export default function* rootSaga() {
  yield all([todoSaga(), authSaga()]);
}
