import styled from "@emotion/styled";
import { COLOR_MAP } from "../../constant";

export const TodoMobileBackground = () => {
  return <TodoBackgroudContainer></TodoBackgroudContainer>;
};

const TodoBackgroudContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${COLOR_MAP.DEEP_BLUE};
`;
