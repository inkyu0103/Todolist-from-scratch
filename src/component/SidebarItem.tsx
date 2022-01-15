import styled from "@emotion/styled";
import { history } from "../redux/store";

export const SidebarItem = ({ ele, url }: { ele: string; url: string }) => {
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
