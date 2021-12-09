import { css, Global } from "@emotion/react";
import { Switch, Route } from "react-router";
import {
  Landing,
  Login,
  TodoMain,
  Join,
  AddTask,
  Profile,
  Statistics,
  EditProfile,
} from "./Pages";
import {} from "react-router";
import { EditTask } from "./Pages/EditTask";
import { PrivateRoute, PublicRoute } from "./lib/AuthRouter";

export const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Switch>
        <PublicRoute path="/" component={Landing} exact />
        <PublicRoute path="/join" component={Join} restricted />
        <PublicRoute path="/login" component={Login} restricted />
        <PrivateRoute path="/:id/edit/:postId" component={EditTask} />
        <PrivateRoute path="/:id/profile" component={Profile} />
        <PrivateRoute path="/:id/statistic" component={Statistics} />
        <PrivateRoute path="/:id/editprofile" component={EditProfile} />
        <PrivateRoute path="/:id/addtask" component={AddTask} />
        <PrivateRoute path="/:id" component={TodoMain} exact />
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
