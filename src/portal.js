import reactDom from "react-dom";

export const SidebarPortal = ({ children }) => {
  const $sidebar = document.getElementById("sidebar");
  return reactDom.createPortal(children, $sidebar);
};
