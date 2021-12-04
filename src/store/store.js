import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootSaga from "./saga/index.js";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import { createBrowserHistory } from "history";

// 리덕스 saga로부터 액션을 받으면 어떻게 처리할지 결정하는 reducer입니다.
export const history = createBrowserHistory();

const sagaMiddlware = createSagaMiddleware();

export const store = createStore(
  rootReducer(history),
  compose(applyMiddleware(sagaMiddlware), composeWithDevTools())
);

sagaMiddlware.run(rootSaga);
