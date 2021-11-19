import styled from "@emotion/styled";
import { TodoMobileItem } from ".";
import { COLOR_MAP } from "../../constant";

export const TodoMobileResult = ({ posts }) => {
  return (
    <TodoMobileResultContainer>
      {posts.map(({ id, isCheck, content }) => (
        <TodoMobileItem key={id} isCheck={isCheck} text={content} id={id} />
      ))}
    </TodoMobileResultContainer>
  );
};

const TodoMobileResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  border-radius: 50px 0 0 0;
  background: ${COLOR_MAP.WHITE};
  overflow: auto;
`;
