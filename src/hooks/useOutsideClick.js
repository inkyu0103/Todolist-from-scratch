import { useEffect } from "react";

export const useOutsideClick = ({ targetRef, callback }) => {
  // 왜 useEffect를 사용했을까?
  useEffect(() => {
    const outSideCallback = (e) => {
      const target = e.target;
      console.log(target);

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
