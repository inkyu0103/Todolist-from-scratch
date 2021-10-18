import { TodoResult, TodoFooter, TodoInput, TodoMessage } from "./component";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { COLOR_MAP } from "./constant";

export const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <AppContainer>
        <AppHeader>
          <h1>ToDo List📚</h1>
        </AppHeader>
        <TodoInput />
        <TodoResult />
        <TodoFooter />
        <TodoMessage message={"성공적으로 삭제했습니다."} messageType={1} />
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
  height: 844px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLOR_MAP.WHITE};
  border-radius: 50px;

  // border-radius를 넘어가는 부분 처리
  overflow: hidden;
`;

const AppHeader = styled.header`
  margin-top: 15px;
`;
