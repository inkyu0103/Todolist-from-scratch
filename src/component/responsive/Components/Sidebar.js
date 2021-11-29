import styled from "@emotion/styled";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <ProfileContainer />
      <SideBarContentContainer>
        {SideBarContent.map((ele, idx) => (
          <SidebarItem key={idx} ele={ele} />
        ))}
      </SideBarContentContainer>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    max-width: 500px;
    background: #f1f1f1;
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

const SideBarContent = ["Board", "달성률 보기", "어쩌구", "어떻게 레이아웃"];
