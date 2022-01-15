import styled from "@emotion/styled";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todoItems,
  handleEditClick,
  handleToggleClick,
  handleDeleteClick,
}: {
  todoItems: any;
  handleEditClick: (todoId: number) => void;
  handleToggleClick: (todoId: number) => void;
  handleDeleteClick: (todoId: number) => void;
}) => {
  return (
    <TodoListContainer>
      {todoItems.map(
        ({
          id: todoId,
          content,
          is_completed,
          priority,
        }: {
          id: number;
          content: string;
          is_completed: boolean;
          priority: number;
        }) => {
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
        }
      )}
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
