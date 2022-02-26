export const COLOR_MAP = {
  LIGHT_RED: "#FFB5B7",
  LIGHT_BLUE: "#F4F7FF",
  DEEP_BLUE: "#4044C9",
  LIGHT_PURPLE: "#D8DFF6",
  LIGHT_GREEN: "#C5E8CC",
  DEEP_GREEN: "#81B622",
  YELLOW_GREEN: "#DBA40E",
  WHITE: "#FFFFFF",
  GREY: "#9D9D9D",

  TODO_ITEM: {
    RED: "#FE5147",
    YELLOW: "#FE9E41",
    BLUE: "#43A0FF",
    COMPELETE: "#C5E8CC",
  },
};

export const toggleMap = {
  SET_ALL: 0,
  SET_COMPLETED: 1,
  SET_UNCOMPLETED: 2,
};

export const BASE_URL = "http://localhost:8080";

export const ENTER_KEY_CODE = 13;

export const routes = {
  GET_TODOS: "/todo",
};

export const todoFilterFunctions: any = {
  getAll: () => true,
  getCompleted: ({ is_completed }: { is_completed: boolean }) =>
    is_completed === true,
  getUnCompleted: ({ is_completed }: { is_completed: boolean }) =>
    is_completed === false,
};
