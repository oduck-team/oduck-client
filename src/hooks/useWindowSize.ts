import { useEffect, useState } from "react";

import { isBrowser } from "@/utils/common";

interface State {
  width: number | null;
  height: number | null;
}

export default function useWindowSize() {
  const [state, setState] = useState<State>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!isBrowser()) return;

    // mount시
    setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const resizeHandler = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return state;
}
