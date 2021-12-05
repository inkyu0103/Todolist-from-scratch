import styled from "@emotion/styled";
import { Create } from "../Button/Create";
import { TodoList } from "../component";
import { useHistory, useParams } from "react-router";
import { LoggedLayout } from "../Layout/LoggedLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/actions/todoAction";

export const TodoMain = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const {
    todo: { todos },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleCreateClick = () => {
    history.push(`/${id}/addtask`);
  };

  return (
    <LoggedLayout title="Board" isHome>
      <TodoMainContainer>
        <TodoList todoitems={todos} />
        <Create handleCreateClick={handleCreateClick} />
      </TodoMainContainer>
    </LoggedLayout>
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
