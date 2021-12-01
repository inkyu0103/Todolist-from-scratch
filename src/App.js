import { css, Global } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import {
  Landing,
  Login,
  TodoMain,
  Join,
  AddTask,
  Profile,
  Statistics,
} from "./Pages";

export const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="join" element={<Join />} />
        <Route path="login" element={<Login />} />
        <Route path=":id" element={<TodoMain />} />
        <Route path=":id/addtask" element={<AddTask />} />
        <Route path=":id/profile" element={<Profile />} />
        <Route path=":id/statistic" element={<Statistics />} />
      </Routes>
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
