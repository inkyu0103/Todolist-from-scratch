import { css, Global } from "@emotion/react";
import { Switch } from "react-router";
import {} from "react-router";
import { PrivateRoute, PublicRoute } from "./utils/AuthRouter";
import { useEffect } from "react";
import {
  AddTaskPage,
  EditProfilePage,
  EditTaskPage,
  JoinPage,
  LandingPage,
  LoginPage,
  ProfilePage,
  StatisticsPage,
  TodoMainPage,
} from "./Pages";
import { useDispatch } from "react-redux";
import { silentLoginRequest } from "./redux/slice/authSlice";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // 처음 마운트 되었을때는 실행하지 않는 hook을 하나 만들어야겠다.
    dispatch(silentLoginRequest());
  }, [dispatch]);
  return (
    <>
      <Global styles={globalStyle} />
      <Switch>
        <PublicRoute path="/" component={LandingPage} restricted exact />
        <PublicRoute path="/join" component={JoinPage} restricted />
        <PublicRoute path="/login" component={LoginPage} restricted />
        <PrivateRoute path="/:id/edit/:todoId" component={EditTaskPage} />
        <PrivateRoute path="/:id/profile" component={ProfilePage} />
        <PrivateRoute path="/:id/statistic" component={StatisticsPage} />
        <PrivateRoute path="/:id/editprofile" component={EditProfilePage} />
        <PrivateRoute path="/:id/addtask" component={AddTaskPage} />
        <PrivateRoute path="/:id" component={TodoMainPage} exact />
      </Switch>
    </>
  );
};

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }

  a {
    text-decoration: none;
    color: black;

    &:active {
      color: none;
    }

    &:visited {
      color: black;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #root {
    width: 100%;
    height: 100%;

    @media (min-width: 768px) {
      width: 80%;
      height: 100vh;
      max-width: 1280px;
    }
  }

  input[type="range"] {
    -webkit-appearance: none;
    height: 0.5px;
    background: black;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #000000;
    border: 1px solid #000000;
    height: 16px;
    width: 16px;
    border-radius: 50%;
  }
`;
