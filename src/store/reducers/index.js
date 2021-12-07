import { combineReducers } from "redux";
import { auth } from "./auth";
import { todo } from "./todo";
import { type } from "./type";
import { chart } from "./chart";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    auth,
    todo,
    type,
    chart,
    router: connectRouter(history),
  });

export default createRootReducer;
