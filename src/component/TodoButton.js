import styled from "@emotion/styled";

export const TodoButton = ({ width, height, image, handleClick }) => {
  return (
    <TodoButtonContainer>
      <TodoButtonDOM
        width={width}
        height={height}
        image={image}
        onClick={handleClick}
      />
    </TodoButtonContainer>
  );
};

const TodoButtonContainer = styled.div`
  margin-left: 5px;
`;

const TodoButtonDOM = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-size: cover;
  background-image: ${({ image }) => `url("${image}")`};
  background-color: transparent;
  background-repeat: none;
  border: none;
`;
