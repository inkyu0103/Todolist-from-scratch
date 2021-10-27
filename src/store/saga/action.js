// saga가 감지할 action 입니다.
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const EDIT_POST_REQUEST = "EDIT_POST_REQUEST";
export const TOGGLE_POST_REQUEST = "TOGGLE_POST_REQUEST";
export const SHOW_MESSAGE = "SHOW_MESSAGE";

// saga에게 전달될 액션 객체를 생성하는 함수들입니다.
export const getInitialPosts = () => ({ type: GET_POSTS_REQUEST });
export const addPost = (text) => ({ type: ADD_POST_REQUEST, text });
export const deletePost = (id) => ({
  type: DELETE_POST_REQUEST,
  id,
});
export const editPost = (id, text) => ({
  type: EDIT_POST_REQUEST,
  id,
  text,
});
export const togglePost = (id, isCheck) => ({
  type: TOGGLE_POST_REQUEST,
  id,
  isCheck,
});
