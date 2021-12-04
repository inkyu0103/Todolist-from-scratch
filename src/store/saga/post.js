import CustomAxios from "../../utils/api";
import { put, call } from "redux-saga/effects";
import {
  SEND_SUCCESS_DELETE_TODO,
  SEND_SUCCESS_GET_TODOS,
  SEND_SUCCESS_POST_TODOS,
  SEND_SUCCESS_PUT_TODO,
  SEND_SUCCESS_TOGGLE_TODO,
} from "../actions/todoAction";

// 처음 실행 때 글 들을 받아오는 saga입니다.
export function* getPostsSaga() {
  try {
    const todos = yield call(CustomAxios.get, "/todo");
    console.log(todos, "get...");
    yield put(SEND_SUCCESS_GET_TODOS({ todos }));
  } catch (e) {
    yield put({
      type: "GET_POST_FAIL",
      content: [],
    });
  }
}

// 글을 생성할 때 실행되는 saga입니다.
export function* addPostSaga({ todo, priority }) {
  try {
    yield CustomAxios.post("/todo", { content: todo, priority });
    const todos = yield call(CustomAxios.get, "/todo");
    yield put(SEND_SUCCESS_POST_TODOS({ todos }));
  } catch (e) {
    yield put({
      type: "SHOW_MESSAGE",
      message: "추가에 실패하였습니다",
    });
  }
}

// 글을 삭제할 때 실행되는saga입니다.
export function* deletePostSaga({ todoId }) {
  try {
    yield call(CustomAxios.delete, `/todo/${todoId}`);
    const todos = yield call(CustomAxios.get, "/todo");
    yield put(SEND_SUCCESS_DELETE_TODO({ todos }));
  } catch (e) {
    yield put({
      type: "SHOW_MESSAGE",
      message: "삭제에 실패하였습니다",
    });
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  }
}

// 글을 수정 할 때 실행되는saga입니다.
export function* putPostSaga({ id, todo, priority }) {
  try {
    yield CustomAxios.put(`/todo/${id}`, { content: todo, priority });
    const todos = yield call(CustomAxios.get, "/todo");
    yield put(SEND_SUCCESS_PUT_TODO({ todos }));
  } catch (e) {
    yield put({
      type: "SHOW_MESSAGE",
      message: "수정에 실패하였습니다",
    });
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  }
}

// 글을 토글할 때 실행되는saga입니다.
export function* togglePostSaga({ id }) {
  try {
    yield CustomAxios.put(`/todo/toggle/${id}`);
    const todos = yield call(CustomAxios.get, "/todo");
    yield put(SEND_SUCCESS_TOGGLE_TODO({ todos }));
  } catch (e) {
    console.log(e);
  }
}
