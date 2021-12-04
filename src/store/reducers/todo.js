import { SUCCESS_GET_TODOS } from "../actions";

const initialState = {
  todos: [],
};
export const todo = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_TODOS:
      return { ...state, todos: action.todos };

    default:
      return state;
  }
};
