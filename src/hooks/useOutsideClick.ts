import { useEffect } from "react";
// any 고치기
export const useOutsideClick = ({ targetRef, callback }: any) => {
  useEffect(() => {
    const outSideCallback = (e: any) => {
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
