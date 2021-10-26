import CustomAxios from "../../utils/api";
import { put, call, delay } from "redux-saga/effects";

export function* getPostsSaga() {
  try {
    const { count, todoList } = yield CustomAxios.get(null);
    yield put({
      type: "GET_POSTS_SUCCESS",
      todoList,
    });
  } catch (e) {
    yield put({
      type: "GET_POST_FAIL",
      todoList: [],
    });
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
    yield put({
      type: "SHOW_MESSAGE",
      message: "성공적으로 추가되었습니다.",
    });
    yield delay(3000);
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  } catch (e) {
    yield put({
      type: "SHOW_MESSAGE",
      message: "추가에 실패하였습니다.",
    });
    yield delay(3000);
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  }
}

export function* deletePostSaga({ type, id }) {
  try {
    const { count, todoList } = yield call(CustomAxios.delete, `/${id}`);
    yield put({
      type: "DELETE_POST_SUCCESS",
      todoList,
    });

    yield put({
      type: "SHOW_MESSAGE",
      message: "성공적으로 삭제되었습니다.",
    });
    yield delay(3000);
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  } catch (e) {
    yield put({
      type: "SHOW_MESSAGE",
      message: "삭제에 실패하였습니다.",
    });
    yield delay(3000);
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  }
}

export function* putPostSaga({ type, content, id }) {
  try {
    yield CustomAxios.put(`/${id}`, { content });
    const { count, todoList } = yield CustomAxios.get();
    yield put({
      type: "EDIT_POST_SUCCESS",
      todoList,
    });
    yield put({
      type: "SHOW_MESSAGE",
      message: "성공적으로 수정되었습니다.",
    });
    yield delay(3000);
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  } catch (e) {
    yield put({
      type: "SHOW_MESSAGE",
      message: "수정에 실패하였습니다.",
    });
    yield delay(3000);
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
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
