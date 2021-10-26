import styled from "@emotion/styled";
import { useState } from "react";
import { COLOR_MAP } from "../constant";
import { deletePost, editPost, togglePost } from "../store/saga/action";
import { useDispatch } from "react-redux";

const ENTER_KEY_CODE = 13;

export const TodoItem = ({ text, id, isCheck }) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(text);

  const dispatch = useDispatch();

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleTogglePost = () => {
    dispatch(togglePost(id, isCheck));
  };

  const handleDeletePost = () => {
    dispatch(deletePost(id));
  };

  const handleEditPost = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      e.target.value = "";
      setEditText("");
      console.log("hi");
      dispatch(editPost(id, editText));
      setEditMode(false);
    } else {
      setEditText(e.target.value);
    }
  };

  return (
    <TodoItemContainer>
      <TodoItemContent>
        {editMode ? (
          <TodoItemEditInput defaultValue={text} onKeyDown={handleEditPost} />
        ) : isCheck ? (
          <s>{text}</s>
        ) : (
          `${text}`
        )}
      </TodoItemContent>
      <TodoItemButtonWrapper>
        <button onClick={handleTogglePost}>✅</button>
        <button onClick={handleDeletePost}>❌</button>
        <button onClick={handleEditMode}>✏️</button>
      </TodoItemButtonWrapper>
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled.article`
  display: flex;
  width: 340px;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  background: ${COLOR_MAP.LIGHT_BLUE};
`;

const TodoItemContent = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TodoItemButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 5px;
`;

const TodoItemEditInput = styled.input`
  width: 100%;
`;
