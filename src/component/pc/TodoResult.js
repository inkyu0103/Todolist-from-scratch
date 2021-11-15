import styled from "@emotion/styled";
import { TodoItem } from "./TodoItem";
import empty from "../../assets/images/empty.png";

export const TodoResult = ({ posts }) => {
  return (
    <TodoResultContainer>
      {posts.length === 0 ? (
        <TodoResultEmptyContainer>
          <div>
            <img src={empty} width="70px" height="70px" alt="빈 사진" />
          </div>
          <div>
            <p>할 일을 추가해보는건 어떨까요?</p>
          </div>
        </TodoResultEmptyContainer>
      ) : (
        posts.map(({ id, content, isCheck, createdAt }) => (
          <TodoItem key={id} text={content} isCheck={isCheck} id={id} />
        ))
      )}
    </TodoResultContainer>
  );
};

const TodoResultContainer = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  overflow: auto;
`;
const TodoResultEmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
