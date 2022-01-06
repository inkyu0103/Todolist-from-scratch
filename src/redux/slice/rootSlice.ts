import { connectRouter } from "connected-react-router";
import { default as todoReducer } from "./todoSlice";
import { default as authReducer } from "./authSlice";

export const rootReducer = (history: any) => ({
  todoReducer,
  authReducer,
  router: connectRouter(history),
});
