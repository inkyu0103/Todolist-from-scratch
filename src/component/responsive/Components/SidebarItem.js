import styled from "@emotion/styled";

export const SidebarItem = ({ ele }) => {
  return <SidebarItemContainer>{ele}</SidebarItemContainer>;
};

const SidebarItemContainer = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    height: 30px;
    border: 1px solid red;
  }
`;
