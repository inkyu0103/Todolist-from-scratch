import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./slice/rootSlice";
import rootSaga from "./saga/index";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer(history),
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
