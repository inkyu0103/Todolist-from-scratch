import { createSlice } from "@reduxjs/toolkit";

interface TodoSliceInitialState {
  todoFilterState: string;
}

const initialState: TodoSliceInitialState = {
  todoFilterState: "getAll",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getAll: (state) => {
      state.todoFilterState = "getAll";
    },
    getCompleted: (state) => {
      state.todoFilterState = "getCompleted";
    },
    getUnCompleted: (state) => {
      state.todoFilterState = "getUnCompleted";
    },
  },
});

const { reducer, actions } = todoSlice;

export const { getAll, getCompleted, getUnCompleted } = actions;

export default reducer;
