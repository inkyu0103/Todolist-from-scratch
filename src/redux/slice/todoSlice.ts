import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../Interface/todo";

interface TodoSliceInitialState {
  todos: Todo[];
  showedTodos: Todo[];
  isLoading: boolean;
}

const initialState: TodoSliceInitialState = {
  todos: [],
  showedTodos: [],
  isLoading: true,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodosRequest: (state) => {
      state.isLoading = true;
    },
    getTodosSuccess: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload.todos;
      state.showedTodos = action.payload.todos;
    },
    getTodosFailure: (state, action) => {
      state.isLoading = false;
    },

    toggleTodoRequest: (state, action) => {
      state.isLoading = true;
    },
    toggleTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload.todos;
      state.showedTodos = action.payload.todos;
    },
    toggleTodoFailure: (state, action) => {
      state.isLoading = false;
    },

    // Mutation
    addTodoRequest: (state, action) => {
      state.isLoading = true;
    },

    addTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.showedTodos = action.payload.todos;
      state.todos = action.payload.todos;
    },

    addTodoFailure: (state, action) => {
      state.isLoading = false;
    },

    deleteTodoRequest: (state, action) => {
      state.isLoading = true;
    },
    deleteTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload.todos;
      state.showedTodos = action.payload.todos;
    },
    deleteTodoFailure: (state, action) => {
      state.isLoading = false;
    },

    editTodoRequest: (state, action) => {},
    editTodoSuccess: (state, action) => {},
    editTodoFailure: (state, action) => {},

    // no request
    getAll: (state) => {
      state.showedTodos = state.todos;
    },
    getCompleted: (state) => {
      state.showedTodos = state.todos.filter(
        ({ is_completed }: any) => is_completed
      );
    },
    getUnCompleted: (state) => {
      state.showedTodos = state.todos.filter(
        ({ is_completed }: any) => !is_completed
      );
    },
  },
});

const { reducer, actions } = todoSlice;

export const {
  getAll,
  getCompleted,
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  getUnCompleted,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  editTodoRequest,
  editTodoFailure,
  editTodoSuccess,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
} = actions;

export default reducer;
