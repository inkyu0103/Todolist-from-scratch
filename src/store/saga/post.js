import CustomAxios from "../../utils/api";
import { put, call, delay } from "redux-saga/effects";

/*
  각각의 saga 들은 다음과 같이 동작합니다.
  
  getPostsSaga : 전체 게시글을 불러온 후 redux에 넘겨줍니다.

  addPostSaga / deletePostSaga / putPostSaga(게시글 수정) / togglePostSaga

  1. 각각의 add / delete / edit / toggle 실행
  2. BASE_URL/todo로 전체 게시글을 불러오기
  3. 전체 게시글 결과를 redux에 넘겨주기
  4-1. 성공적으로 수행하면 리덕스에 성공메시지를 보내는 액션 발행
  4-2. 1초 대기 한후, 메시지를 없애라는 액션 발행
 */

// 처음 실행 때 글 들을 받아오는 saga입니다.
export function* getPostsSaga() {
  try {
    const { count, content } = yield CustomAxios.get("/todo");
    yield put({
      type: "GET_POSTS_SUCCESS",
      content,
      count,
    });
  } catch (e) {
    yield put({
      type: "GET_POST_FAIL",
      content: [],
    });
  }
}

// 글을 생성할 때 실행되는 saga입니다.
export function* addPostSaga({ type, text }) {
  try {
    yield CustomAxios.post("/todo", { content: text });
    const { count, content } = yield CustomAxios.get("/todo");
    yield put({
      type: "ADD_POST_SUCCESS",
      content,
      count,
    });
    yield put({
      type: "SHOW_MESSAGE",
      message: "성공적으로 추가되었습니다",
    });

    yield delay(1000);

    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  } catch (e) {
    yield put({
      type: "SHOW_MESSAGE",
      message: "추가에 실패하였습니다",
    });
    yield delay(1000);
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  }
}

// 글을 삭제할 때 실행되는saga입니다.
export function* deletePostSaga({ id }) {
  try {
    yield call(CustomAxios.delete, `/todo/${id}`);
    const { count, content } = yield CustomAxios.get("/todo");
    yield put({
      type: "DELETE_POST_SUCCESS",
      content,
      count,
    });

    yield put({
      type: "SHOW_MESSAGE",
      message: "성공적으로 삭제되었습니다",
    });
    yield delay(1000);
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  } catch (e) {
    yield put({
      type: "SHOW_MESSAGE",
      message: "삭제에 실패하였습니다",
    });
    yield delay(1000);
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  }
}

// 글을 수정 할 때 실행되는saga입니다.
export function* putPostSaga({ id, text }) {
  try {
    yield CustomAxios.put(`/todo/${id}`, { content: text });
    const { count, content } = yield CustomAxios.get("/todo");
    yield put({
      type: "EDIT_POST_SUCCESS",
      content,
      count,
    });
    yield put({
      type: "SHOW_MESSAGE",
      message: "성공적으로 수정되었습니다",
    });
    yield delay(1000);
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  } catch (e) {
    yield put({
      type: "SHOW_MESSAGE",
      message: "수정에 실패하였습니다",
    });
    yield delay(1000);
    yield put({
      type: "SHOW_MESSAGE",
      message: "",
    });
  }
}

// 글을 토글할 때 실행되는saga입니다.
export function* togglePostSaga({ id, isCheck }) {
  try {
    yield CustomAxios.post(`/todo/${id}`, { isCheck });
    const { content } = yield CustomAxios.get("/todo");
    yield put({
      type: "TOGGLE_POST_SUCCESS",
      content,
    });
  } catch (e) {
    console.log(e);
  }
}
