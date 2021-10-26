import { TodoResult, TodoFooter, TodoInput, TodoMessage } from "./component";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { COLOR_MAP } from "./constant";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInitialPosts } from "./store/saga/action";
import empty from "./assets/images/empty.png";

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, todoList, message } = useSelector((state) => state);
  console.log(isLoading, todoList, message);

  //useEffect deps 살펴보기
  useEffect(() => {
    dispatch(getInitialPosts());
  }, []);

  return (
    <>
      <Global styles={globalStyle} />
      <AppContainer>
        <AppHeader>
          <h1>ToDo List📚</h1>
          {message && <TodoMessage message={message} />}
        </AppHeader>
        <TodoInput />
        {todoList?.length === 0 ? (
          <TodoResultEmptyContainer>
            <div>
              <img src={empty} width="70px" height="70px" alt="빈 사진" />
            </div>
            <div>
              <p>할 일을 추가해보는건 어떨까요?</p>
            </div>
          </TodoResultEmptyContainer>
        ) : (
          <TodoResult posts={todoList} />
        )}
        <TodoFooter />
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
  // 수정
  height: 600px;
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

const TodoResultEmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
