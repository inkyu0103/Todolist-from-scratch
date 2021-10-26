import styled from "@emotion/styled";
import { TodoItem } from "./TodoItem";

export const TodoResult = ({ posts }) => {
  console.log("todo result :", posts);
  return (
    <TodoResultContainer>
      {posts.map(({ id, content, isCheck, createdAt }) => (
        <TodoItem key={id} text={content} isCheck={isCheck} id={id} />
      ))}
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
