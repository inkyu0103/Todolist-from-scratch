import styled from "@emotion/styled";
import { useState } from "react";
import { COLOR_MAP } from "../constant";

const ENTER_KEY_CODE = 13;

export const TodoInput = () => {
  const [text, setText] = useState(null);

  const handleChange = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      // 여기서 서버에 전송한다.
      e.target.value = "";
      setText("");
    } else {
      setText(e.target.value);
    }
  };

  return (
    <TodoInputContainer>
      <TodoInputDOM
        placeholder="할 일을 입력해주세요"
        onKeyDown={handleChange}
      />
    </TodoInputContainer>
  );
};

const TodoInputContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const TodoInputDOM = styled.input`
  width: 340px;
  border-width: 0 0 3px 0;
  border-color: ${COLOR_MAP.GREY};
  outline: none;
`;
