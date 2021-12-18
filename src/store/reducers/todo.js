import { SUCCESS_GET_TODOS, SUCCESS_TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [],
};
export const todo = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_TODOS:
      return { ...state, todos: action.todos };

    case SUCCESS_TOGGLE_TODO:
      return { ...state, todos: action.todos };
    default:
      return state;
  }
};
