import styled from "@emotion/styled";
import { useParams } from "react-router";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  const { id } = useParams<{ id: string }>();

  const SideBarContent = [
    { title: "Board", url: `/${id}` },
    { title: "Profile", url: `/${id}/profile` },
    { title: "Statistics", url: `/${id}/statistic` },
  ];

  return (
    <SidebarContainer>
      <ProfileContainer />
      <SideBarContentContainer>
        {SideBarContent.map(({ title, url }, idx) => (
          // SidebarItem에 userId ={id} 는 왜 들어간거지?
          <SidebarItem key={idx} ele={title} url={url} />
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
