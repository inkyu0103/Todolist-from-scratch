import styled from "@emotion/styled";
import { history } from "../store/store";

export const SidebarItem = ({ ele, url }) => {
  const handleClick = () => {
    history.push(url);
  };
  return (
    <SidebarItemContainer onClick={handleClick}>{ele}</SidebarItemContainer>
  );
};

const SidebarItemContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
