import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootSaga from "./saga/index.js";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  content: [],
  message: "",
  count: 0,
};

// 리덕스 saga로부터 액션을 받으면 어떻게 처리할지 결정하는 reducer입니다.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS_SUCCESS":
      return { ...state, content: action.content, count: action.count };
    case "ADD_POST_SUCCESS":
      return { ...state, content: action.content, count: action.count };
    case "DELETE_POST_SUCCESS":
      return { ...state, content: action.content, count: action.count };
    case "EDIT_POST_SUCCESS":
      return { ...state, content: action.content, count: action.count };
    case "TOGGLE_POST_SUCCESS":
      return { ...state, content: action.content };

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
