import CustomAxios from "../../utils/api";
import { put, call } from "redux-saga/effects";
import { history } from "../store";
import { Todo } from "../../Interface/todo";
import {
  addTodoSuccess,
  getTodoFailure,
  getTodoSuccess,
} from "../slice/todoSlice";

export function* getTodosSaga() {
  try {
    const todos: Todo[] = yield call(CustomAxios.get, "/todo");
    yield put(getTodoSuccess(todos));
  } catch (e) {
    yield put(getTodoFailure([]));
  }
}

export function* addTodoSaga({
  todo,
  priority,
}: {
  todo: string;
  priority: number;
  type: string;
}) {
  try {
    yield CustomAxios.post("/todo", { content: todo, priority });
    const todos: Todo[] = yield call(CustomAxios.get, "/todo");
    yield put(addTodoSuccess({ todos }));
    history.goBack();
  } catch (e) {
    console.log(e);
  }
}

export function* deleteTodoSaga({ todoId }: { todoId: string; type: string }) {
  try {
    yield call(CustomAxios.delete, `/todo/${todoId}`);
    const todos: Todo[] = yield call(CustomAxios.get, "/todo");
    //yield put(SEND_SUCCESS_DELETE_TODO({ todos }));
  } catch (e) {
    console.log(e);
  }
}

export function* editTodoSaga({
  todoId,
  todo,
  priority,
}: {
  todoId: number;
  todo: string;
  priority: number;
  type: string;
}) {
  console.log(todoId, todo, priority, "여긴 어쩌구 저쩌구");
  try {
    yield CustomAxios.put(`/todo/${todoId}/content`, {
      content: todo,
      priority,
    });
    const todos: Todo[] = yield call(CustomAxios.get, "/todo");
    //yield put(SEND_SUCCESS_PUT_TODO({ todos }));
    history.goBack();
  } catch (e) {
    console.log(e);
  }
}

// 글을 토글할 때 실행되는saga입니다.
export function* toggleTodoSaga({
  todoId,
  toggleType,
}: {
  todoId: number;
  toggleType: number;
  type: string;
}) {
  try {
    yield CustomAxios.put(`/todo/${todoId}/toggle`);
    if (toggleType === 0) {
      const todos: Todo[] = yield call(CustomAxios.get, "/todo");
      //yield put(SEND_SUCCESS_TOGGLE_TODO({ todos }));
    } else if (toggleType === 1) {
      const todos: Todo[] = yield call(CustomAxios.get, "/todo/completed");
      //yield put(SEND_SUCCESS_TOGGLE_TODO({ todos }));
    } else {
      const todos: Todo[] = yield call(CustomAxios.get, "/todo/uncompleted");
      //yield put(SEND_SUCCESS_TOGGLE_TODO({ todos }));
    }
  } catch (e) {
    console.log(e);
  }
}
