import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import landing from "../assets/images/landing.jpg";

export const Landing = () => {
  let navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/join");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <LandingContainer>
      <NextContainer>
        <NavigateContainer onClick={handleJoinClick}>
          <NavigateExplain>Join This App</NavigateExplain>
        </NavigateContainer>
        <NavigateContainer onClick={handleLoginClick}>
          <NavigateExplain>Login</NavigateExplain>
        </NavigateContainer>
      </NextContainer>
      <SloganContainer>
        <p>
          Focus <br />
          Your Work <br />
        </p>
      </SloganContainer>
    </LandingContainer>
  );
};

const LandingContainer = styled.main`
  display: flex;
  position: relative;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  background-image: ${`url("${landing}")`};
  background-size: cover;
  background-repeat: no-repeat;
`;

const NextContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10%;
`;

const NavigateExplain = styled.h4`
  font-weight: 300;
`;

const NavigateContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  max-width: 400px;
  height: 30px;
  border: 1px solid white;
  color: white;
  font-weight: 500;
  margin-bottom: 10px;

  &:hover {
    background: white;
    color: black;
    animation: blackwhite 800ms;

    @keyframes blackwhite {
      from {
        background: transparent;
        color: white;
      }
      to {
        background: white;
        color: black;
      }
    }
  }
`;

const SloganContainer = styled.h1`
  position: absolute;
  color: white;
  top: 20%;
  left: 10%;
  font-weight: 300;
  font-size: 60px;
  animation: smoothAppear 1000ms;

  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
