import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { COLOR_MAP, ENTER_KEY_CODE } from "../../constant";
import { deletePost, editPost, togglePost } from "../../store/saga/action";
import { useDispatch, useSelector } from "react-redux";

export const TodoItem = ({ text, id, isCheck }) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(text);
  const { todoList } = useSelector((state) => state);

  const dispatch = useDispatch();

  // 연필 버튼을 눌렀을 때, 수정할 수 있도록 바꿔주는 함수입니다.
  const handleEditMode = useCallback(() => {
    setEditMode(!editMode);
  }, [editMode]);

  // 토글버튼을 눌렀을 때, redux-saga에 액션을 보내는 함수입니다.
  const handleTogglePost = useCallback(() => {
    dispatch(togglePost(id, isCheck));
  }, [dispatch, id, isCheck]);

  // 삭제버튼을 눌렀을 때, redux-saga에 액션을 보내는 함수입니다.
  const handleDeletePost = useCallback(() => {
    dispatch(deletePost(id, todoList));
  }, [dispatch, id, todoList]);

  // keydown 이벤트를 받아 게시글을 수정할 수 있도록 하는 함수입니다.
  const handleEditPost = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      e.target.value = "";
      setEditText("");
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
  flex: none;
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
