import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
