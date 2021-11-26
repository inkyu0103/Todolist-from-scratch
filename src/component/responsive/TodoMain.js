import styled from "@emotion/styled";
import { Create } from "./Button/Create";
import { TodoList } from "./TodoList";

export const TodoMain = () => {
  return (
    <TodoMainContainer>
      <TodoList todoitems={dummy} />
      <Create />
    </TodoMainContainer>
  );
};

const TodoMainContainer = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const dummy = [
  { content: "공부하기", isCheck: true },
  { content: "뒹굴거리기", isCheck: true },
  { content: "프론트엔드 숙제하기", isCheck: false },
  { content: "밥먹기", isCheck: false },
  { content: "어쩌구 저쩌구", isCheck: true },
];
