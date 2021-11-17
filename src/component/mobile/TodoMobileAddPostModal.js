import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { COLOR_MAP, ENTER_KEY_CODE } from "../../constant";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const TodoMobileAddPostModal = ({ toggleModal }) => {
  const [content, setContent] = useState(null);
  const inputRef = useRef();
  useOutsideClick({ targetRef: inputRef, callback: toggleModal });

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.keyCode === ENTER_KEY_CODE) {
      // 여기도 좀 고쳐야 할듯
      setContent(null);
      e.target.value = "";
      toggleModal();
      // 서버에 요청 보내기.
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
