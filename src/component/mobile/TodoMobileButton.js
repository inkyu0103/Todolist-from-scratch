import styled from "@emotion/styled";

export const TodoMobileButton = ({
  width,
  height,
  backgroundColor,
  fontColor,
  text,
  handleClick,
  fontSize,
}) => {
  return (
    <TodoMobileButtonContainer width={width} height={height}>
      <TodoMobileButtonTarget
        backgroundColor={backgroundColor}
        color={fontColor}
        onClick={handleClick}
        fontSize={fontSize}
      >
        {text}
      </TodoMobileButtonTarget>
    </TodoMobileButtonContainer>
  );
};

const TodoMobileButtonContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const TodoMobileButtonTarget = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 900;
`;
