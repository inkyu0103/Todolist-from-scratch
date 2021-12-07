import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import checked from "../assets/images/checked.png";
import unchecked from "../assets/images/unchecked.png";
import edit from "../assets/images/pencil.png";

import { Icon } from "../Button/Icon";
import { toggleTodo } from "../store/actions/todoAction";
import { history } from "../store/store";
import { useParams } from "react-router";

const toggleMap = {
  SET_ALL: 0,
  SET_COMPLETED: 1,
  SET_UNCOMPLETED: 2,
};
export const TodoItem = ({ content, isCheck, id }) => {
  const dispatch = useDispatch();
  const { id: userId } = useParams();
  const { toggleType } = useSelector((state) => state.type);

  const handleClick = () => {
    dispatch(toggleTodo({ todoId: id, toggleType: toggleMap[toggleType] }));
  };

  const handleEditClick = () => {
    history.push(`/${userId}/edit/${id}`);
  };

  return (
    <TodoItemContainer>
      <TodoItemContent>{content}</TodoItemContent>
      <Icon image={edit} handleClick={handleEditClick} />
      <TodoItemComplete isCheck={isCheck} onClick={handleClick} />
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
