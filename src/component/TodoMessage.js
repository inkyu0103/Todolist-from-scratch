import styled from "@emotion/styled";
import { COLOR_MAP } from "../constant";

const MESSAGE_TYPE = {
  DELETE: 0,
  ADD: 1,
};

export const TodoMessage = ({ message, messageType }) => {
  return (
    <TodoMessageContainer type={messageType}>{message}</TodoMessageContainer>
  );
};

const TodoMessageContainer = styled.section`
  position: absolute;
  bottom: 80px;
  width: 340px;
  height: 30px;
  background: ${({ messageType }) =>
    messageType ? COLOR_MAP.LIGHT_GREEN : COLOR_MAP.LIGHT_RED};
  text-align: center;

  display: none;
`;
