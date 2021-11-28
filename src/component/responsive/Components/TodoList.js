import styled from "@emotion/styled";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoitems }) => {
  return (
    <TodoListContainer>
      {todoitems.map(({ content, isCheck }, idx) => {
        return <TodoItem key={idx} content={content} isCheck={isCheck} />;
      })}
    </TodoListContainer>
  );
};

const TodoListContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;
