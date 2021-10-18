import styled from "@emotion/styled";
import { TodoItem } from "./TodoItem";

export const TodoResult = () => {
  return (
    <TodoResultContainer>
      <TodoItem text="하이룽" />
      <TodoItem text="리덕스 사가는 어떻게 쓰는거죠?" />
      <TodoItem text="리액트 리덕스 써도 되나용?" />
      <TodoItem text="호곡 취업하면 맥북 주나용?" />
      <TodoItem text="어떤 개발자가 되어야 할까요?" />
      <TodoItem text="좋은 사람 되기 " />
    </TodoResultContainer>
  );
};

const TodoResultContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
