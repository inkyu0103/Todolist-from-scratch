import { TodoResult, TodoInput, TodoMessage } from "./component/pc";
import {
  TodoMobileHeader,
  TodoMobileResult,
  TodoMobileAddPostModal,
} from "./component/mobile";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { COLOR_MAP } from "./constant";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInitialPosts } from "./store/saga/action";
import { useMediaQuery } from "react-responsive";
import { ModalPortal } from "./portal";

export const App = () => {
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();
  const { content, message, count } = useSelector((state) => state);
  const isMobile = useMediaQuery({ query: "(max-width:400px)" });
  const toggleModal = () => setModalState((prev) => !prev);

  useEffect(() => {
    dispatch(getInitialPosts());
  }, [dispatch]);

  if (isMobile) {
    return (
      <>
        <Global styles={globalStyle} />
        <AppContainer>
          <ModalPortal>
            {modalState && <TodoMobileAddPostModal toggleModal={toggleModal} />}
          </ModalPortal>
          <TodoMobileHeader toggleModal={toggleModal} />
          <TodoMobileResult posts={dummy}></TodoMobileResult>
        </AppContainer>
      </>
    );
  }

  return (
    <>
      <Global styles={globalStyle} />
      {message && <TodoMessage message={message} />}
      <AppContainer>
        <AppHeader>
          <h1>ToDo List📚</h1>
        </AppHeader>
        <TodoInput />
        <TodoResult posts={content} count={count} />
      </AppContainer>
    </>
  );
};

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }
  html {
    width: 100vw;
    height: 100vh;
  }
  body {
    width: 100%;
    height: 100%;
    background: ${COLOR_MAP.LIGHT_PURPLE};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AppContainer = styled.div`
  width: 390px;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLOR_MAP.WHITE};
  border-radius: 50px;
  overflow: hidden;

  @media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: ${COLOR_MAP.DEEP_BLUE};
    border-radius: 0;
  }
`;

const AppHeader = styled.header`
  margin-top: 15px;
`;

const dummy = [
  {
    id: 301,
    content: "언제 이거 하냐",
    isCheck: 0,
    isSaved: 0,
    createdAt: "2021-11-16 06:06:27",
  },
  {
    id: 300,
    content: "허허",
    isCheck: 0,
    isSaved: 0,
    createdAt: "2021-11-16 06:06:23",
  },
  {
    id: 299,
    content: "쩝.",
    isCheck: 0,
    isSaved: 0,
    createdAt: "2021-11-15 12:13:29",
  },
  {
    id: 292,
    content: "안녕하세요",
    isCheck: 1,
    isSaved: 0,
    createdAt: "2021-11-14 09:41:55",
  },
];
