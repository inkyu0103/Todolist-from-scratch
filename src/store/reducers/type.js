import {
  SET_ALL,
  SET_COMPLETED,
  SET_UNCOMPLETED,
} from "../../redux/actions/todoTypeAction";

const initialState = {
  toggleType: SET_ALL,
};

export const type = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL:
      return { ...state, toggleType: action.toggleType };

    case SET_COMPLETED:
      return { ...state, toggleType: action.toggleType };

    case SET_UNCOMPLETED:
      return { ...state, toggleType: action.toggleType };

    default:
      return state;
  }
};
