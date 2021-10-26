import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootSaga from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  todoList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS_SUCCESS":
      return { todoList: action.todoList };

    case "ADD_POST_SUCCESS":
      return { ...state, todoList: action.todoList };

    case "DELETE_POST_SUCCESS":
      return { ...state, todoList: action.todoList };
    case "EDIT_POST_SUCCESS":
      return { ...state, todoList: action.todoList };
    case "TOGGLE_POST_SUCCESS":
      return { ...state, todoList: action.todoList };

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
