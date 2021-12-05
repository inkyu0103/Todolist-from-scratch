import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import checked from "../assets/images/checked.png";
import unchecked from "../assets/images/unchecked.png";
import { toggleTodo } from "../store/actions/todoAction";

const toggleMap = {
  SET_ALL: 0,
  SET_COMPLETED: 1,
  SET_UNCOMPLETED: 2,
};
export const TodoItem = ({ content, isCheck, id }) => {
  const dispatch = useDispatch();
  const { toggleType } = useSelector((state) => state.type);

  const handleClick = () => {
    dispatch(toggleTodo({ todoId: id, toggleType: toggleMap[toggleType] }));
  };

  return (
    <TodoItemContainer onClick={handleClick}>
      <TodoItemContent>{content}</TodoItemContent>
      <TodoItemComplete isCheck={isCheck}></TodoItemComplete>
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
