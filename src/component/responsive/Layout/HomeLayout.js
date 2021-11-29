import styled from "@emotion/styled";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SidebarPortal } from "../../../portal";
import { Header } from "../Components/Header";
import { MobileSidebar } from "../Components/MobileSidebar";
import { Nav } from "../Components/Nav";
import { Sidebar } from "../Components/Sidebar";

export const HomeLayout = ({ children, title }) => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const [sidebarState, setSidebarState] = useState(false);

  const handleSideBar = () => {
    setSidebarState(!sidebarState);
  };

  if (isMobile) {
    return (
      <HomeLayoutContainer>
        <Header isMobile={isMobile} title={title} handleClick={handleSideBar} />
        <Nav />
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
      </HomeLayoutContainer>
    );
  }

  if (!isMobile) {
    return (
      <HomeLayoutContainer>
        <Sidebar />
        <HomeLayoutMainContainer>
          <Header isMobile={isMobile} title={title} />
          <Nav />
          {children}
        </HomeLayoutMainContainer>
      </HomeLayoutContainer>
    );
  }
};

const HomeLayoutContainer = styled.div`
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

const HomeLayoutMainContainer = styled.section`
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
