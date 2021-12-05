import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { auth } from "./auth";
import { statistic } from "./statistic";
import { todo } from "./todo";
import { type } from "./type";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    auth,
    todo,
    type,
    router: connectRouter(history),
  });

export default createRootReducer;
