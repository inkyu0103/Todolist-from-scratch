import { ReactChild } from "react";
import reactDom from "react-dom";

// any 수정
export const SidebarPortal = ({ children }: { children: any }) => {
  const $sidebar: any = document.getElementById("sidebar");
  return reactDom.createPortal(children, $sidebar);
};
