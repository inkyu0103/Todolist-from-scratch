import styled from "@emotion/styled";
import { TodoMobileButton } from ".";
import { COLOR_MAP } from "../../constant";

export const TodoMobileHeader = () => {
  return (
    <TodoMobileHeaderContainer>
      <TodoMobileHeaderContentWarpper>
        <TodoMobileHeaderTitleWrapper>To Do</TodoMobileHeaderTitleWrapper>
        <TodoMobileButton
          width="110px"
          height="35px"
          fontColor={COLOR_MAP.DEEP_BLUE}
          fontSize="15px"
          text="Add new"
          backgroundColor={COLOR_MAP.WHITE}
          handleClick={handleClick}
        ></TodoMobileButton>
      </TodoMobileHeaderContentWarpper>
    </TodoMobileHeaderContainer>
  );
};

const handleClick = () => {
  alert("hi");
};

const TodoMobileHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
`;

const TodoMobileHeaderTitleWrapper = styled.div`
  color: ${COLOR_MAP.WHITE};
  font-size: 25px;
`;

const TodoMobileHeaderContentWarpper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
