import styled from "@emotion/styled";
import hamburger from "../../assets/images/hamburger.png";
import { Icon } from "./Button/Icon";

export const Header = ({ isMobile }) => {
  return (
    <AppHeader>
      <AppHeaderTitle>Board</AppHeaderTitle>
      <AppIconContainer>
        {isMobile && <Icon image={hamburger} />}
      </AppIconContainer>
    </AppHeader>
  );
};

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 30px;
`;

const AppHeaderTitle = styled.h1`
  font-weight: 300;
  font-size: 30px;
  margin-left: 10px;
`;

const AppIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50px;
  // 아이콘 크기로 수정하자.
  height: 20px;
  margin-right: 10px;
`;
