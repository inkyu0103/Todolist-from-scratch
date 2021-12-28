import styled from "@emotion/styled";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todoitems,
  handleEditClick,
  handleToggleClick,
  handleDeleteClick,
}) => {
  return (
    <TodoListContainer>
      {todoitems.map(({ id: todoId, content, is_completed, priority }) => {
        return (
          <TodoItem
            key={todoId}
            content={content}
            isCheck={is_completed}
            priority={priority}
            handleEditClick={() => handleEditClick(todoId)}
            handleToggleClick={() => handleToggleClick(todoId)}
            handleDeleteClick={() => handleDeleteClick(todoId)}
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
