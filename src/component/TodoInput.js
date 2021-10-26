import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { COLOR_MAP } from "../constant";
import { addPost } from "../store/saga/action";

const ENTER_KEY_CODE = 13;

export const TodoInput = () => {
  const [content, setContent] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      e.target.value = "";
      setContent("");
      dispatch(addPost(content));
    } else {
      setContent(e.target.value);
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
