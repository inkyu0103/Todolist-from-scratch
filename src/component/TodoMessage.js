import styled from "@emotion/styled";
import { COLOR_MAP } from "../constant";

export const TodoMessage = ({ message }) => {
  return <TodoMessageContainer>{message}</TodoMessageContainer>;
};

const TodoMessageContainer = styled.section`
  position: absolute;
  top: 30px;
  right: 30px;
  font-weight: 700;
  text-align: center;
  z-index: 1;

  animation: fadein 1s;
  color: ${COLOR_MAP.WHITE};
  background: black;
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
