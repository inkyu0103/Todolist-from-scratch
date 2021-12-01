import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SidebarItem = ({ ele, url }) => {
  return (
    <Link to={url}>
      <SidebarItemContainer>{ele}</SidebarItemContainer>
    </Link>
  );
};

const SidebarItemContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
