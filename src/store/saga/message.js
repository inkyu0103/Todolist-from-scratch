import { call, delay, put } from "@redux-saga/core/effects";

export const successMessage = (actionType) => {
  return { type: "SHOW_MESSAGE", message: `${actionType}에 성공하였습니다.` };
};

export const failMessage = (actionType) => {
  return { type: "SHOW_MESSAGE", message: `${actionType}에 실패하였습니다.` };
};
