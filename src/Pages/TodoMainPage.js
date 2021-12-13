import { LoggedLayout } from "../Layout/LoggedLayout";
import { TodoMain } from "../component/TodoMain";

export const TodoMainPage = () => {
  return (
    <LoggedLayout title="Board" isHome>
      <TodoMain />
    </LoggedLayout>
  );
};
