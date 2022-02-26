import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAll, getCompleted, getUnCompleted } from "../redux/slice/todoSlice";

export const Nav = () => {
  const [navIndex, setNavIndex] = useState<number>(0);
  const dispatch = useDispatch();

  const navContents = [
    {
      title: "All",
      handleClick: () => {
        if (navIndex !== 0) {
          dispatch(getAll());
          setNavIndex(0);
        }
      },
    },
    {
      title: "Completed",
      handleClick: () => {
        if (navIndex !== 1) {
          dispatch(getCompleted());
          setNavIndex(1);
        }
      },
    },
    {
      title: "Uncompleted",
      handleClick: () => {
        if (navIndex !== 2) {
          dispatch(getUnCompleted());
          setNavIndex(2);
        }
      },
    },
  ];

  return (
    <AppNav>
      {navContents.map(({ title, handleClick }, idx) => (
        <AppNavTitle
          key={idx}
          idx={idx}
          selectedIdx={navIndex}
          onClick={() => {
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
  cursor: pointer;
  color: ${({ selectedIdx, idx }: { selectedIdx: number; idx: number }) =>
    selectedIdx === idx ? "black" : "grey"};
  border-bottom: ${({
    selectedIdx,
    idx,
  }: {
    selectedIdx: number;
    idx: number;
  }) => (selectedIdx === idx ? "1px solid black" : "none")};

  font-weight: 400;

  @media (min-width: 768px) {
    justify-content: center;
    height: 50px;
  }
`;
