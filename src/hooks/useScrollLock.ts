import { useEffect } from "react";

export function useScrollLock(isLock: boolean) {
  useEffect(() => {
    if (isLock) {
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: auto;
        width: 100%;`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      };
    }
  }, [isLock]);
}
