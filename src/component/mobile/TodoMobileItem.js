import styled from "@emotion/styled";
import { COLOR_MAP } from "../../constant";
import { useDispatch } from "react-redux";
import { deletePost, togglePost } from "../../store/saga/action";

export const TodoMobileItem = ({ text, isCheck, id }) => {
  const dispatch = useDispatch();
  const handleToggleClick = () => dispatch(togglePost(id, isCheck));
  const handleDeleteClick = () => dispatch(deletePost(id));

  return (
    <TodoMobileItemContainer>
      <TodoMobileItemCompleteBtn
        isCheck={isCheck}
        onClick={handleToggleClick}
      />
      <TodoMobileContentWrapper>{text}</TodoMobileContentWrapper>
      <TodoMobileItemDeleteBtn onClick={handleDeleteClick}>
        ❌
      </TodoMobileItemDeleteBtn>
    </TodoMobileItemContainer>
  );
};

const TodoMobileItemContainer = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  width: 80%;
  height: 50px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const TodoMobileItemCompleteBtn = styled.button`
  border: none;
  outline: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ isCheck }) =>
    isCheck ? COLOR_MAP.DEEP_GREEN : COLOR_MAP.YELLOW_GREEN};
`;

const TodoMobileItemDeleteBtn = styled.button`
  border: none;
  outline: none;
  background: none;
`;

const TodoMobileContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;
