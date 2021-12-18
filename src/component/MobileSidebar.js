import styled from "@emotion/styled";
import { useRef } from "react";
import { useParams } from "react-router";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { SidebarItem } from "./SidebarItem";

export const MobileSidebar = ({ handleClick }) => {
  const sidebarRef = useRef();
  const { id } = useParams();

  const SideBarContent = [
    { title: "Board", url: `/${id}` },
    { title: "Profile", url: `/${id}/profile` },
    { title: "Statistics", url: `/${id}/statistic` },
  ];

  useOutsideClick({ targetRef: sidebarRef, callback: handleClick });

  return (
    <MobileSidebarContainer ref={sidebarRef}>
      <ProfileContainer />
      <SideBarContentContainer>
        {SideBarContent.map(({ title, url }, idx) => (
          <SidebarItem key={idx} ele={title} url={url} userId={id} />
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
    background: #f1f1f1;

    animation: slideAppear 500ms;

    @keyframes slideAppear {
      from {
        margin-left: -300px;
      }
      to {
        margin-left: 0;
      }
    }
  }
`;

const ProfileContainer = styled.section`
  width: 100%;
  height: 150px;
`;

const SideBarContentContainer = styled.section`
  width: 100%;
  height: 100%;
`;
