import { TodoResult, TodoInput, TodoMessage } from "./component/pc";
import {
  TodoMobileBackground,
  TodoMobileHeader,
  TodoMobileResult,
} from "./component/mobile";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { COLOR_MAP } from "./constant";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInitialPosts } from "./store/saga/action";
import { useMediaQuery } from "react-responsive";

export const App = () => {
  const dispatch = useDispatch();
  const { content, message, count } = useSelector((state) => state);
  const isMobile = useMediaQuery({ query: "(max-width:400px)" });

  useEffect(() => {
    dispatch(getInitialPosts());
  }, [dispatch]);

  console.log(content);
  if (isMobile) {
    return (
      <>
        <Global styles={globalStyle} />
        <AppContainer>
          <TodoMobileHeader></TodoMobileHeader>
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
