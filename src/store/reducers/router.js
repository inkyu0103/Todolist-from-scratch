const initialState = {
  url: "/",
};

export const router = (state = initialState, action) => {
  switch (action.type) {
    case "GO_MAIN":
      return { ...state, url: `/${action.userId}` };

    default:
      return state;
  }
};
