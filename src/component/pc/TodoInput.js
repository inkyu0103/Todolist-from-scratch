import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { COLOR_MAP, ENTER_KEY_CODE } from "../../constant";
import { addPost } from "../../store/saga/action";

export const TodoInput = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.charCode === ENTER_KEY_CODE) {
      e.target.value = "";
      setContent("");
      dispatch(addPost(content));
    }
  };

  return (
    <TodoInputContainer>
      <TodoInputDOM
        placeholder="할 일을 입력해주세요"
        onChange={handleChange}
        onKeyPress={handleEnter}
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
