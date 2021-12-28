import styled from "@emotion/styled";
import checked from "../assets/images/checked.png";
import unchecked from "../assets/images/unchecked.png";
import edit from "../assets/images/pencil.png";
import trash from "../assets/images/delete.png";
import { Icon } from "../Button/Icon";
import { COLOR_MAP } from "../constant";

const priorityColor = {
  0: COLOR_MAP.TODO_ITEM.BLUE,
  1: COLOR_MAP.TODO_ITEM.YELLOW,
  2: COLOR_MAP.TODO_ITEM.RED,
};

export const TodoItem = ({
  content,
  isCheck,
  priority,
  handleEditClick,
  handleToggleClick,
  handleDeleteClick,
}) => {
  return (
    <TodoItemContainer
      backgroundColor={priorityColor[priority]}
      isCheck={isCheck}
    >
      <TodoItemContent>{content}</TodoItemContent>
      <IconWrapper>
        <Icon image={trash} handleClick={handleDeleteClick} />
        <Icon image={edit} handleClick={handleEditClick} />
        <TodoItemComplete isCheck={isCheck} onClick={handleToggleClick} />
      </IconWrapper>
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

  background-color: ${({ backgroundColor, isCheck }) =>
    isCheck ? COLOR_MAP.TODO_ITEM.COMPELETE : backgroundColor};
  border-radius: 15px;
  margin-top: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 15%;
  min-width: 65px;
  justify-content: space-between;
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
