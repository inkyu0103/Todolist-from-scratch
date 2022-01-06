import { all, takeEvery } from "redux-saga/effects";
import {
  POST_SIGNIN_REQUEST,
  POST_SIGNUP_REQUEST,
  POST_SILENT_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  POST_SIGNOUT_REQUEST,
} from "../actions/index";
import {
  DELETE_TODO_REQUEST,
  PUT_TODO_REQUEST,
} from "../actions/todoAction";
import {
  addTodoRequest,
  getTodoRequest,
  toggleTodoRequest,
} from "../slice/todoSlice";
import {
  changePasswordSaga,
  postSignInSaga,
  postSignOutSaga,
  postSignUpSaga,
  postSilentSignInSaga,
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
  yield takeEvery(getTodoRequest.type, getTodosSaga);
  yield takeEvery(toggleTodoRequest.type, toggleTodoSaga);
  yield takeEvery(addTodoRequest.type, addTodoSaga);
  yield takeEvery(DELETE_TODO_REQUEST, deleteTodoSaga);
  yield takeEvery(PUT_TODO_REQUEST, editTodoSaga);
}

export function* authSaga() {
  yield takeEvery(POST_SIGNUP_REQUEST, postSignUpSaga);
  yield takeEvery(POST_SIGNIN_REQUEST, postSignInSaga);
  yield takeEvery(CHANGE_PASSWORD_REQUEST, changePasswordSaga);
  yield takeEvery(POST_SILENT_REQUEST, postSilentSignInSaga);
  yield takeEvery(POST_SIGNOUT_REQUEST, postSignOutSaga);
}

export default function* rootSaga() {
  yield all([todoSaga(), authSaga()]);
}
