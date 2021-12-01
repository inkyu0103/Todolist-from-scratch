import styled from "@emotion/styled";
import { Header } from "../component";

export const UnloggedLayout = ({ children, title, goBack }) => {
  return (
    <AppContainer>
      <Header title={title} goBack={goBack} />
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
