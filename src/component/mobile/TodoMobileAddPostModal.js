import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { COLOR_MAP, ENTER_KEY_CODE } from "../../constant";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { addPost } from "../../store/saga/action";

export const TodoMobileAddPostModal = ({ toggleModal }) => {
  const [content, setContent] = useState(null);
  const inputRef = useRef();
  const dispatch = useDispatch();
  useOutsideClick({ targetRef: inputRef, callback: toggleModal });

  const handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      dispatch(addPost(content));
      e.target.value = "";
      setContent(null);
      toggleModal();
    } else {
      setContent(e.target.value);
    }
  };

  return (
    <TodoMobileAddPostModalBackground>
      <TodoMobileAddPostModalMain ref={inputRef}>
        <TodoMobileAddPostInput
          placeholder="할 일을 입력해주세요"
          onKeyDown={handleKeyDown}
        />
      </TodoMobileAddPostModalMain>
    </TodoMobileAddPostModalBackground>
  );
};

const TodoMobileAddPostModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

const TodoMobileAddPostModalMain = styled.div`
  width: 100%;
  height: 50%;
  background: ${COLOR_MAP.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoMobileAddPostInput = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;
