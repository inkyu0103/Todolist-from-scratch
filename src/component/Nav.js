import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAll, setCompleted, setUncompleted } from "../store/actions";
import {
  getCompletedTodos,
  getTodos,
  getUncompletedTodos,
} from "../store/actions/todoAction";

export const Nav = () => {
  const [navIndex, setNavIndex] = useState(0);
  const dispatch = useDispatch();

  const navContents = [
    {
      title: "All",
      handleClick: () => {
        dispatch(setAll());
        dispatch(getTodos());
      },
    },
    {
      title: "Completed",
      handleClick: () => {
        dispatch(setCompleted());
        dispatch(getCompletedTodos());
      },
    },
    {
      title: "Uncompleted",
      handleClick: () => {
        dispatch(setUncompleted());
        dispatch(getUncompletedTodos());
      },
    },
  ];

  const handleClickNav = (idx) => {
    setNavIndex(idx);
  };

  return (
    <AppNav>
      {navContents.map(({ title, handleClick }, idx) => (
        <AppNavTitle
          key={idx}
          idx={idx}
          selectedIdx={navIndex}
          onClick={() => {
            handleClickNav(idx);
            handleClick();
          }}
        >
          {title}
        </AppNavTitle>
      ))}
    </AppNav>
  );
};

const AppNav = styled.nav`
  @media (max-width: 767px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-style: solid none;
    border-color: #e5e5e5;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    border-width: 1px;

    border-style: solid none;
    border-color: #e5e5e5;
  }
`;

const AppNavTitle = styled.h4`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${({ selectedIdx, idx }) => (selectedIdx === idx ? "black" : "grey")};
  border-bottom: ${({ selectedIdx, idx }) =>
    selectedIdx === idx ? "1px solid black" : "none"};

  font-weight: 400;

  @media (min-width: 768px) {
    justify-content: center;
    height: 50px;
  }
`;

// 클릭 -> 데이터를 다시 뿌림
