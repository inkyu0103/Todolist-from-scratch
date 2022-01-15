import styled from "@emotion/styled";
import { Create } from "../Button/Create";
import { TodoList } from ".";
import { useParams, useHistory } from "react-router";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  deleteTodoRequest,
  getTodosRequest,
  toggleTodoRequest,
} from "../redux/slice/todoSlice";

export const TodoMain = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const todos = useSelector(
    (state: RootState) => state.todoReducer.showedTodos
  );

  useEffect(() => {
    dispatch(getTodosRequest());
  }, [dispatch]);

  const handleToggleClick = useCallback(
    (todoId) => {
      dispatch(toggleTodoRequest(todoId));
    },
    [dispatch]
  );

  const handleEditClick = useCallback(
    (todoId) => {
      history.push(`/${id}/edit/${todoId}`);
    },
    [history, id]
  );

  const handleCreateClick = useCallback(() => {
    history.push(`/${id}/addtask`);
  }, [id, history]);

  const handleDeleteClick = useCallback(
    (todoId) => {
      dispatch(deleteTodoRequest(todoId));
    },
    [dispatch]
  );

  return (
    <TodoMainContainer>
      <TodoList
        todoItems={todos}
        handleEditClick={handleEditClick}
        handleToggleClick={handleToggleClick}
        handleDeleteClick={handleDeleteClick}
      />

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
