import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { auth } from "./auth";
import { statistic } from "./statistic";
import { todo } from "./todo";
import { router } from "./router";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    auth,
    todo,
    router: connectRouter(history),
  });

export default createRootReducer;
