import styled from "@emotion/styled";
import { Create } from "../Button/Create";
import { TodoList } from "../component";
import { useNavigate, useParams } from "react-router";
import { LoggedLayout } from "../Layout/LoggedLayout";

export const TodoMain = () => {
  let nevigate = useNavigate();
  const { id } = useParams();

  const handleCreateClick = () => {
    nevigate(`/${id}/addtask`);
  };

  return (
    <LoggedLayout title="Board" goBack isHome>
      <TodoMainContainer>
        <TodoList todoitems={dummy} />
        <Create handleCreateClick={handleCreateClick} />
      </TodoMainContainer>
    </LoggedLayout>
  );
};

//아 아래로 밀리는 현상이 생기는 이유가 100% 로 하면 부모 크기의 100%이다보니까 자기가 시작하는 시점에서 100%가 되는구나.
// 그럼 flex로 처리하고 꽉차게 만들자.
const TodoMainContainer = styled.main`
  position: relative;
  width: 100%;
  height: 100px; // 여기서 뭔가 문제가 있는데...?
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
