// saga catch action
export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_COMPELETED_TODOS_REQUEST = "GET_COMPELETED_TODOS_REQUEST";
export const GET_UNCOMPLETED_TODOS_REQUEST = "GET_UNCOMPLETED_TODOS_REQUEST";
export const POST_TODO_REQUEST = "POST_TODO_REQUEST";
export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const PUT_TODO_REQUEST = "PUT_TODO_REQUEST";
export const PUT_TOGGLE_REQUEST = "PUT_TOGGLE_REQUEST";

// from saga to reducer
export const SUCCESS_GET_TODOS = "SUCCESS_GET_TODOS";
export const SUCCESS_POST_TODOS = "SUCCESS_GET_TODOS";
export const SUCCESS_DELETE_TODO = "SUCCESS_DELETE_TODO";
export const SUCCESS_PUT_TODO = "SUCCESS_PUT_TODO";
export const SUCCESS_TOGGLE_TODO = "SUCCESS_TOGGLE_TODO";

// dispatch action from component to saga
export const getTodos = () => ({ type: GET_TODOS_REQUEST });
export const getCompletedTodos = () => ({ type: GET_COMPELETED_TODOS_REQUEST });
export const getUncompletedTodos = () => ({
  type: GET_UNCOMPLETED_TODOS_REQUEST,
});

export const postTodos = ({ todo, priority }) => ({
  type: POST_TODO_REQUEST,
  todo,
  priority,
});
export const deleteTodo = ({ todoId }) => ({
  type: DELETE_TODO_REQUEST,
  todoId,
});
export const editTodo = ({ todoId, todo, priority }) => ({
  type: PUT_TODO_REQUEST,
  todoId,
  todo,
  priority,
});
export const toggleTodo = ({ todoId, toggleType }) => ({
  type: PUT_TOGGLE_REQUEST,
  todoId,
  toggleType,
});

// dispatch action from saga to reducer
export const SEND_SUCCESS_GET_TODOS = ({ todos }) => ({
  type: SUCCESS_GET_TODOS,
  todos,
});
export const SEND_SUCCESS_POST_TODOS = ({ todos }) => ({
  type: SUCCESS_POST_TODOS,
  todos,
});
export const SEND_SUCCESS_DELETE_TODO = ({ todos }) => ({
  type: SUCCESS_DELETE_TODO,
  todos,
});
export const SEND_SUCCESS_PUT_TODO = ({ todos }) => ({
  type: SUCCESS_PUT_TODO,
  todos,
});
export const SEND_SUCCESS_TOGGLE_TODO = ({ todos }) => ({
  type: SUCCESS_TOGGLE_TODO,
  todos,
});
