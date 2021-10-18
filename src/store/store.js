import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// Actions
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// action creator function
export const increase = () => {
  return { type: INCREASE };
};

export const decrease = () => {
  return { type: DECREASE };
};

export const changeText = (text) => ({ type: CHANGE_TEXT, text });

export const addToList = (item) => ({ type: ADD_TO_LIST, item });

// reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };

    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };

    // 일반적으로는 에러를 띄운다.
    default:
      return state;
  }
};

export const store = createStore(reducer);

store.dispatch(increase());
