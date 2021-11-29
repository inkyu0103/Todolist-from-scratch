/*
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
  const content = useSelector((state) => state.content);
  const count = useSelector((state) => state.count);
  const message = useSelector((state) => state.message);

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
          <TodoMobileResult posts={content}></TodoMobileResult>
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
*/

import { css, Global } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./component/responsive/Pages/Landing";
import { Login } from "./component/responsive/Pages/Login";
import { TodoMain } from "./component/responsive/Pages/TodoMain";
import { Join } from "./component/responsive/Pages/Join";
import { AddTask } from "./component/responsive/Pages/AddTask";
import { Profile } from "./component/responsive/Pages/Profile";
import { Statistics } from "./component/responsive/Pages/Statistics";

export const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="join" element={<Join />} />
        <Route path="login" element={<Login />} />
        <Route path=":id" element={<TodoMain />} />
        <Route path=":id/addtask" element={<AddTask />} />
        <Route path=":id/profile" element={<Profile />} />
        <Route path=":id/statistic" element={<Statistics />} />
      </Routes>
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
  html,
  body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #root {
    width: 100%;
    height: 100%;
    @media (min-width: 768px) {
      width: 80%;
      height: 100vh;
      max-width: 1280px;
    }
  }

  input[type="range"] {
    -webkit-appearance: none;
    height: 0.5px;
    background: black;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #000000;
    border: 1px solid #000000;
    height: 16px;
    width: 16px;
    border-radius: 50%;
  }
`;
