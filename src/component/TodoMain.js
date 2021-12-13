import styled from "@emotion/styled";
import { Create } from "../Button/Create";
import { TodoList } from ".";
import { useHistory, useParams } from "react-router";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, toggleTodo } from "../store/actions/todoAction";

const toggleMap = {
  SET_ALL: 0,
  SET_COMPLETED: 1,
  SET_UNCOMPLETED: 2,
};

export const TodoMain = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const toggleType = useSelector((state) => state.type.toggleType);
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleToggleClick = useCallback(
    (todoId) => {
      dispatch(toggleTodo({ todoId, toggleType: toggleMap[toggleType] }));
    },
    [toggleType, dispatch]
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

  return (
    <TodoMainContainer>
      <TodoList
        todoitems={todos}
        handleEditClick={handleEditClick}
        handleToggleClick={handleToggleClick}
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
