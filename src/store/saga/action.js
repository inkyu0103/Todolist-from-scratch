// saga action
const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
const EDIT_POST_REQUEST = "EDIT_POST_REQUEST";
const TOGGLE_POST_REQUEST = "TOGGLE_POST_REQUEST";

// saga action creator
export const getInitialPosts = () => ({ type: GET_POSTS_REQUEST });
export const addPost = (content) => ({ type: ADD_POST_REQUEST, content });
export const deletePost = (id) => ({ type: DELETE_POST_REQUEST, id });
export const editPost = (id, content) => ({
  type: EDIT_POST_REQUEST,
  id,
  content,
});
export const togglePost = (id, isCheck) => ({
  type: TOGGLE_POST_REQUEST,
  id,
  isCheck,
});
