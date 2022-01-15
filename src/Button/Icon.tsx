import styled from "@emotion/styled";

export const Icon = ({
  image,
  handleClick,
}: {
  image: string;
  handleClick: any;
}) => {
  return <AppIconContainer image={image} onClick={handleClick} />;
};

const AppIconContainer = styled.div`
  width: 20px;
  height: 20px;
  background-image: ${({ image }: { image: string }) => `url("${image}")`};
  background-size: contain;
  background-repeat: no-repeat;
`;
