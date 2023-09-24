import { useEffect, useState } from "react";

import { isBrowser } from "@/utils/common";

interface State {
  width: number;
  height: number;
}

export default function useWindowSize() {
  const [state, setState] = useState<State>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!isBrowser()) return;

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
