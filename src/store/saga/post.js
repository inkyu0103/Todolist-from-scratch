import CustomAxios from "../../utils/api";
import { put, call } from "redux-saga/effects";

export function* getPostsSaga() {
  try {
    const { count, todoList } = yield CustomAxios.get(null);
    yield put({
      type: "GET_POSTS_SUCCESS",
      todoList,
    });
  } catch (e) {
    console.log("error", e);
  }
}

export function* addPostSaga({ type, content }) {
  try {
    const response = yield CustomAxios.post(null, { content });
    const { count, todoList } = yield CustomAxios.get();
    yield put({
      type: "ADD_POST_SUCCESS",
      todoList,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* deletePostSaga({ type, id }) {
  try {
    const { count, todoList } = yield call(CustomAxios.delete, `/${id}`);
    console.log("newData is ", todoList);
    yield put({
      type: "DELETE_POST_SUCCESS",
      todoList,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* putPostSaga({ type, content, id }) {
  console.log("putPostSaga", content);
  try {
    yield CustomAxios.put(`/${id}`, { content });
    const { count, todoList } = yield CustomAxios.get();
    yield put({
      type: "EDIT_POST_SUCCESS",
      todoList,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* togglePostSaga({ id, isCheck }) {
  try {
    yield CustomAxios.post(`/${id}`, { isCheck });
    const { count, todoList } = yield CustomAxios.get();
    yield put({
      type: "TOGGLE_POST_SUCCESS",
      todoList,
    });
  } catch (e) {
    console.log(e);
  }
}
