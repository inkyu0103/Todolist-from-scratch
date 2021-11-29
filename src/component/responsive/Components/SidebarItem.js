import styled from "@emotion/styled";

export const SidebarItem = ({ ele }) => {
  return <SidebarItemContainer>{ele}</SidebarItemContainer>;
};

const SidebarItemContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
