import { LoggedLayout } from "../Layout/LoggedLayout";
import { TodoMain } from "../component/TodoMain";

export const TodoMainPage = () => {
  return (
    // Loggedlayout tsx 의 리턴타입을 정해줘야할듯?
    <LoggedLayout title="Board" isHome>
      <TodoMain />
    </LoggedLayout>
  );
};
