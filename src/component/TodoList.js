import styled from "@emotion/styled";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoitems }) => {
  return (
    <TodoListContainer>
      {todoitems.map(({ id: todoId, content, is_completed, priority }, idx) => {
        return (
          <TodoItem
            key={idx}
            content={content}
            isCheck={is_completed}
            priority={priority}
            todoId={todoId}
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
