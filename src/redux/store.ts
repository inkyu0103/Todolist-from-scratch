import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./slice/rootSlice";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer(history),
  middleware: [sagaMiddleware],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
