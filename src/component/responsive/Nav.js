import styled from "@emotion/styled";

export const Nav = () => {
  return <AppNav>I am Nam</AppNav>;
};

const AppNav = styled.nav`
  @media (max-width: 767px) {
    width: 100%;
    height: 100px;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100px;
    border: 1px solid black;
  }
`;
