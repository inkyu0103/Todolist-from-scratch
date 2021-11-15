import styled from "@emotion/styled";
import { COLOR_MAP } from "../../constant";

export const TodoFooter = () => {
  return <TodoFooterContainer>I am Footer</TodoFooterContainer>;
};

const TodoFooterContainer = styled.footer`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 70px;

  background: ${COLOR_MAP.LIGHT_BLUE};
`;
