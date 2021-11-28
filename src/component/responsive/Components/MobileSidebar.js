import styled from "@emotion/styled";
import { useRef } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { SidebarItem } from "./SidebarItem";

export const MobileSidebar = ({ handleClick }) => {
  const sidebarRef = useRef();

  useOutsideClick({ targetRef: sidebarRef, callback: handleClick });

  return (
    <MobileSidebarContainer ref={sidebarRef}>
      <ProfileContainer />
      <SideBarContentContainer>
        {SideBarContent.map((ele, idx) => (
          <SidebarItem key={idx} ele={ele} />
        ))}
      </SideBarContentContainer>
    </MobileSidebarContainer>
  );
};

const MobileSidebarContainer = styled.aside`
  @media (max-width: 767px) {
    position: absolute;
    width: 30%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background: #868b8e;
  }
`;

const ProfileContainer = styled.section`
  width: 100%;
  height: 150px;
  border: 1px solid black;
`;

const SideBarContentContainer = styled.section`
  width: 100%;
  height: 100%;
`;

const SideBarContent = ["달성률 보기", "어쩌구", "어떻게 레이아웃"];
