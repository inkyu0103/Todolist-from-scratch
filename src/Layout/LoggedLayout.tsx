import styled from "@emotion/styled";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SidebarPortal } from "../portal";
import { Sidebar, Nav, MobileSidebar, Header } from "../component";

export const LoggedLayout = ({
  children,
  title,
  isHome = false,
  goBack = false,
}: any): any => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const [sidebarState, setSidebarState] = useState(false);

  const handleSideBar = () => {
    setSidebarState(!sidebarState);
  };

  if (isMobile) {
    return (
      <LoggedLayoutContainer>
        <Header
          isMobile={isMobile}
          title={title}
          handleClick={handleSideBar}
          goBack={goBack}
        />
        {isHome && <Nav />}
        {children}

        <SidebarPortal>
          {sidebarState && (
            <SidebarBackground>
              <MobileSidebar
                isOpened={sidebarState}
                handleClick={handleSideBar}
              />
            </SidebarBackground>
          )}
        </SidebarPortal>
      </LoggedLayoutContainer>
    );
  }

  if (!isMobile) {
    return (
      <LoggedLayoutContainer>
        <Sidebar />
        <LoggedLayoutMainContainer>
          <Header
            isMobile={isMobile}
            title={title}
            handleClick={handleSideBar}
            goBack={goBack}
          />
          {isHome && <Nav />}
          {children}
        </LoggedLayoutMainContainer>
      </LoggedLayoutContainer>
    );
  }
};

const LoggedLayoutContainer = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
  }
`;

const LoggedLayoutMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const SidebarBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;
