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

export const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/join" component={Join} />
        <Route path="/login" component={Login} />
        <Route path="/:id/edit/:postId" component={EditTask} />
        <Route path="/:id/profile" component={Profile} />
        <Route path="/:id/statistic" component={Statistics} />
        <Route path="/:id/editprofile" component={EditProfile} />
        <Route path="/:id/addtask" component={AddTask} />
        <Route path="/:id" component={TodoMain} exact />
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
