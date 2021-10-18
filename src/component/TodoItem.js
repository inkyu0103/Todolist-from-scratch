import styled from "@emotion/styled";
import { COLOR_MAP } from "../constant";

export const TodoItem = ({ text }) => {
  return (
    <TodoItemContainer>
      <TodoItemContent>{text}</TodoItemContent>
      <TodoItemButtonWrapper>✅ ❌</TodoItemButtonWrapper>
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled.article`
  display: flex;
  width: 340px;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  background: ${COLOR_MAP.LIGHT_BLUE};
`;

const TodoItemContent = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TodoItemButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 5px;
`;

// 글씨가 매우 길어지면 버튼의 줄이 맞지 않으니... 후후
