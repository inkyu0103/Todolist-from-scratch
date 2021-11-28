import styled from "@emotion/styled";
import { Header } from "../Components/Header";

export const UnloggedLayout = ({ children, title }) => {
  return (
    <AppContainer>
      <Header title={title} />
      {children}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 767px) {
    height: 100vh;
  }

  @media (min-width: 768px) {
    height: 100%;
  }
`;
