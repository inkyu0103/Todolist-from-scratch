import { SUCCESS_GET_CHART } from "../../redux/actions/chartAction";

const initialState = {
  data: [],
};

export const chart = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_CHART:
      return { ...state, data: action.chartData };
    default:
      return state;
  }
};
