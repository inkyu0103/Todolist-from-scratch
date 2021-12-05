import styled from "@emotion/styled";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoitems }) => {
  return (
    <TodoListContainer>
      {todoitems.map(({ id, content, is_completed }, idx) => {
        return (
          <TodoItem
            key={idx}
            content={content}
            isCheck={is_completed}
            id={id}
          />
        );
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
