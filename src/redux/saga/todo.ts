import CustomAxios from "../../utils/api";
import { put, call } from "redux-saga/effects";
import { history } from "../store";
import { Todo } from "../../Interface/todo";
import {
  addTodoSuccess,
  deleteTodoSuccess,
  editTodoSuccess,
  getTodosFailure,
  getTodosSuccess,
  toggleTodoSuccess,
} from "../slice/todoSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getTodosSaga() {
  try {
    const todos: Todo[] = yield call(CustomAxios.get, "/todo");
    yield put(getTodosSuccess({ todos }));
  } catch (e) {
    yield put(getTodosFailure([]));
  }
}

export function* addTodoSaga(
  action: PayloadAction<{ content: string; priority: number }>
) {
  try {
    yield CustomAxios.post("/todo", action.payload);
    const todos: Todo[] = yield call(CustomAxios.get, "/todo");
    yield put(addTodoSuccess({ todos }));
    history.goBack();
  } catch (e) {
    console.log(e);
  }
}

export function* deleteTodoSaga(action: PayloadAction<{ todoId: string }>) {
  try {
    yield call(CustomAxios.delete, `/todo/${action.payload}`);
    const todos: Todo[] = yield call(CustomAxios.get, "/todo");
    yield put(deleteTodoSuccess({ todos }));
  } catch (e) {
    console.log(e);
  }
}

export function* editTodoSaga(
  action: PayloadAction<{ todoId: string; content: string; priority: number }>
) {
  const { todoId, content, priority } = action.payload;
  try {
    yield CustomAxios.put(`/todo/${todoId}`, {
      content,
      priority,
    });
    const todos: Todo[] = yield call(CustomAxios.get, "/todo");
    yield put(editTodoSuccess({ todos }));
    history.goBack();
  } catch (e) {
    console.log(e);
  }
}

export function* toggleTodoSaga(action: PayloadAction<{ todoId: string }>) {
  try {
    yield CustomAxios.patch(`/todo/${action.payload}`, {});
    const todos: Todo[] = yield call(CustomAxios.get, "/todo");
    yield put(toggleTodoSuccess({ todos }));
  } catch (e) {
    console.log(e);
  }
}
