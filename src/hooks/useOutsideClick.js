import { useEffect } from "react";

export const useOutsideClick = ({ targetRef, callback }) => {
  useEffect(() => {
    const outSideCallback = (e) => {
      const target = e.target;

      if (target && !targetRef.current.contains(target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", outSideCallback);
    return () => {
      document.removeEventListener("mousedown", outSideCallback);
    };
  }, [targetRef, callback]);
};
