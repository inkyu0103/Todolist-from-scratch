import { useEffect } from "react";

export const useOutsideClick = ({ targetRef, callback }) => {
  // 왜 useEffect를 사용했을까?
  useEffect(() => {
    const outSideCallback = (e) => {
      const target = e.target;

      // targetRef.current !== target을 해버리면, input을 누르면 화면이 꺼진다.
      if (!targetRef.current.contains(target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", outSideCallback);
    return () => {
      document.removeEventListener("mousedown", outSideCallback);
    };
  }, [targetRef, callback]);
};
