import CustomAxios from "../../utils/api";
import { put, call } from "redux-saga/effects";
import {
  SEND_SUCCESS_DELETE_TODO,
  SEND_SUCCESS_GET_TODOS,
  SEND_SUCCESS_POST_TODOS,
  SEND_SUCCESS_PUT_TODO,
  SEND_SUCCESS_TOGGLE_TODO,
} from "../../redux/actions/todoAction";
import { history } from "../store";

export function* getPostsSaga() {
  try {
    const todos = yield call(CustomAxios.get, "/todo");
    yield put(SEND_SUCCESS_GET_TODOS({ todos }));
  } catch (e) {
    console.log(e);
  }
}

export function* getCompletedPostsSaga() {
  try {
    const todos = yield call(CustomAxios.get, "/todo/completed");
    yield put(SEND_SUCCESS_GET_TODOS({ todos }));
  } catch (e) {
    yield put({
      type: "GET_POST_FAIL",
      content: [],
    });
  }
}

export function* getUncompletedPostsSaga() {
  try {
    const todos = yield call(CustomAxios.get, "/todo/uncompleted");
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
    history.goBack();
  } catch (e) {
    console.log(e);
  }
}

// 글을 삭제할 때 실행되는saga입니다.
export function* deletePostSaga({ todoId }) {
  try {
    yield call(CustomAxios.delete, `/todo/${todoId}`);
    const todos = yield call(CustomAxios.get, "/todo");
    yield put(SEND_SUCCESS_DELETE_TODO({ todos }));
  } catch (e) {
    console.log(e);
  }
}

// 글을 수정 할 때 실행되는saga입니다.
export function* putPostSaga({ todoId, todo, priority }) {
  console.log(todoId, todo, priority, "여긴 어쩌구 저쩌구");
  try {
    yield CustomAxios.put(`/todo/${todoId}/content`, {
      content: todo,
      priority,
    });
    const todos = yield call(CustomAxios.get, "/todo");
    yield put(SEND_SUCCESS_PUT_TODO({ todos }));
    history.goBack();
  } catch (e) {
    console.log(e);
  }
}

// 글을 토글할 때 실행되는saga입니다.
export function* togglePostSaga({ todoId, toggleType }) {
  try {
    yield CustomAxios.put(`/todo/${todoId}/toggle`);
    if (toggleType === 0) {
      const todos = yield call(CustomAxios.get, "/todo");
      yield put(SEND_SUCCESS_TOGGLE_TODO({ todos }));
    } else if (toggleType === 1) {
      const todos = yield call(CustomAxios.get, "/todo/completed");
      yield put(SEND_SUCCESS_TOGGLE_TODO({ todos }));
    } else {
      const todos = yield call(CustomAxios.get, "/todo/uncompleted");
      yield put(SEND_SUCCESS_TOGGLE_TODO({ todos }));
    }
  } catch (e) {
    console.log(e);
  }
}
