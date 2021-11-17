import reactDom from "react-dom";

export const ModalPortal = ({ children }) => {
  const $modal = document.getElementById("modal");
  return reactDom.createPortal(children, $modal);
};
