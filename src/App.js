import { TodoResult, TodoInput, TodoMessage } from "./component";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { COLOR_MAP } from "./constant";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInitialPosts } from "./store/saga/action";

export const App = () => {
  const dispatch = useDispatch();
  const { content, message, count } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getInitialPosts());
  }, []);

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
  }
  html {
    width: 100%;
    height: 100%;
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
`;

const AppHeader = styled.header`
  margin-top: 15px;
`;
