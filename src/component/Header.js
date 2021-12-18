import styled from "@emotion/styled";
import hamburger from "../assets/images/hamburger.png";
import back from "../assets/images/back.png";
import { Icon } from "../Button/Icon";
import { history } from "../store/store";

export const Header = ({ isMobile, title, handleClick, goBack }) => {
  const handleClickGoBack = () => {
    history.goBack();
  };

  return (
    <AppHeader>
      <AppTitleIconWrapper>
        {goBack && <Icon image={back} handleClick={handleClickGoBack} />}
        <AppHeaderTitle>{title}</AppHeaderTitle>
      </AppTitleIconWrapper>
      <AppIconContainer>
        {isMobile && <Icon image={hamburger} handleClick={handleClick} />}
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

const AppTitleIconWrapper = styled.div`
  display: flex;
  align-items: center;
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
  height: 20px;
  margin-right: 10px;
`;
