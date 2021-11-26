import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { TodoMain } from "./TodoMain";

export const Container = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  if (isMobile) {
    return (
      <AppContainer>
        <Header />
        <Nav />
        <TodoMain />
      </AppContainer>
    );
  }

  if (!isMobile) {
    return (
      <AppContainer>
        <Nav />
        <AppHeaderMainContainer>
          <Header isMobile={isMobile} />
          <TodoMain />
        </AppHeaderMainContainer>
      </AppContainer>
    );
  }
};

const AppContainer = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
  }
`;

const AppHeaderMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
