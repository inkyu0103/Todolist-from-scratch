import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { Icon } from "../Button/Icon";
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/Sidebar";
import back from "../../../assets/images/back.png";

export const LoggedLayout = ({ children, title }) => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  if (isMobile) {
    return (
      <LoggedLayoutContainer>
        <Header title={title} />
        {children}
      </LoggedLayoutContainer>
    );
  }

  if (!isMobile) {
    return (
      <LoggedLayoutContainer>
        <Sidebar />
        <LoggedLayoutMainContainer>
          <Header isMobile={isMobile} title={title} />
          {children}
        </LoggedLayoutMainContainer>
      </LoggedLayoutContainer>
    );
  }
};

const LoggedLayoutContainer = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

const LoggedLayoutMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
