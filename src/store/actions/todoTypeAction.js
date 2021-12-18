export const SET_ALL = "SET_ALL";
export const SET_COMPLETED = "SET_COMPLETED";
export const SET_UNCOMPLETED = "SET_UNCOMPLETED";

export const setAll = () => ({ type: SET_ALL, toggleType: SET_ALL });
export const setCompleted = () => ({
  type: SET_COMPLETED,
  toggleType: SET_COMPLETED,
});
export const setUncompleted = () => ({
  type: SET_UNCOMPLETED,
  toggleType: SET_UNCOMPLETED,
});
