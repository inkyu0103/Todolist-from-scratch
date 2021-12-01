import styled from "@emotion/styled";
import checked from "../assets/images/checked.png";
import unchecked from "../assets/images/unchecked.png";

export const TodoItem = ({ content, isCheck }) => {
  const handleClick = () => {};

  return (
    <TodoItemContainer onClick={handleClick}>
      <TodoItemContent>{content}</TodoItemContent>
      <TodoItemComplete isCheck={isCheck}></TodoItemComplete>
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled.article`
  width: 80%;
  height: 50px;

  display: flex;
  flex: none;
  justify-content: space-between;
  align-items: center;

  background: #43a0ff;
  border-radius: 15px;
  margin-top: 15px;
`;

const TodoItemContent = styled.div`
  color: white;
  margin-left: 10px;
`;

const TodoItemComplete = styled.div`
  width: 20px;
  height: 20px;
  background-image: ${({ isCheck }) =>
    `url("${isCheck ? checked : unchecked}")`};

  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 10px;
`;
