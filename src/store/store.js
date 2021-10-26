import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootSaga from "./saga/index.js";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  isLoading: true,
  todoList: [],
  message: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS_SUCCESS":
      return { ...state, todoList: action.todoList };
    case "ADD_POST_SUCCESS":
      return { ...state, todoList: action.todoList };
    case "DELETE_POST_SUCCESS":
      return { ...state, todoList: action.todoList };
    case "EDIT_POST_SUCCESS":
      return { ...state, todoList: action.todoList };
    case "TOGGLE_POST_SUCCESS":
      return { ...state, todoList: action.todoList };

    case "SHOW_MESSAGE":
      return { ...state, message: action.message };

    default:
      return state;
  }
};

const sagaMiddlware = createSagaMiddleware();

export const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddlware), composeWithDevTools())
);

sagaMiddlware.run(rootSaga);
