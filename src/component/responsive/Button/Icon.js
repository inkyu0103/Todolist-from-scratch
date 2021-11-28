import styled from "@emotion/styled";

export const Icon = ({ image, handleClick }) => {
  return <AppIconContainer image={image} onClick={handleClick} />;
};

const AppIconContainer = styled.div`
  width: 20px;
  height: 20px;
  background-image: ${({ image }) => `url("${image}")`};
  background-size: contain;
  background-repeat: no-repeat;
`;
