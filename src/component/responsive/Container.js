import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { TodoMain } from "./TodoMain";

export const Container = () => {
  return (
    <AppContainer>
      <Header />
      <Nav />
      <TodoMain></TodoMain>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    position: relative;
  }

  @media (min-width: 768) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;
