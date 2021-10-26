import styled from "@emotion/styled";
import { COLOR_MAP } from "../constant";

export const TodoMessage = ({ message }) => {
  return <TodoMessageContainer>{message}</TodoMessageContainer>;
};

const TodoMessageContainer = styled.section`
  position: absolute;
  bottom: 80px;
  width: 340px;
  height: 30px;
  text-align: center;

  animation: fadein 3s;
  background: ${COLOR_MAP.LIGHT_GREEN};
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
