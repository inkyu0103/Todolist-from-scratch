import styled from "@emotion/styled";
import { Create } from "../Button/Create";
import { TodoItem } from ".";
import { useParams, useHistory } from "react-router";
import { useCallback } from "react";

import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useToggleTodoMutation,
} from "../query/todo";
import { todoFilterFunctions } from "../constant";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const TodoMain = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetTodosQuery();
  const { mutate: toggleTodoMutation } = useToggleTodoMutation();
  const { mutate: deleteTodoMutation } = useDeleteTodoMutation();
  const todoFilterState = useSelector(
    (state: RootState) => state.todoReducer.todoFilterState
  );

  const handleToggleClick = (todoId: string, is_completed: boolean) => {
    toggleTodoMutation({ todoId, isChecked: is_completed });
  };

  const handleDeleteClick = (todoId: string) => {
    deleteTodoMutation({ todoId });
  };

  const handleEditClick = useCallback(
    (todoId) => {
      history.push(`/${id}/edit/${todoId}`);
    },
    [history, id]
  );

  const handleCreateClick = useCallback(() => {
    history.push(`/${id}/addtask`);
  }, [id, history]);

  return (
    <TodoMainContainer>
      <TodoListContainer>
        {!isLoading &&
          data
            .filter(todoFilterFunctions[todoFilterState])
            .map(({ id: todoId, content, is_completed, priority }: any) => (
              <TodoItem
                key={todoId}
                content={content}
                isCheck={is_completed}
                priority={priority}
                handleEditClick={() => handleEditClick(todoId)}
                handleToggleClick={() => {
                  handleToggleClick(todoId, is_completed);
                }}
                handleDeleteClick={() => handleDeleteClick(todoId)}
              />
            ))}
      </TodoListContainer>

      <Create handleCreateClick={handleCreateClick} />
    </TodoMainContainer>
  );
};

const TodoMainContainer = styled.main`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoListContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
