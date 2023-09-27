import { useEffect, useState } from "react";

import { isBrowser } from "@/utils/common";

import useThrottle from "./useThrottle";

interface State {
  width: number | null;
  height: number | null;
}

/**
 * 윈도우 크기를 반환합니다
 * 선택적으로 쓰로틀링을 적용할 수 있습니다
 *
 * @param {number | undefined} throttleMs 쓰로틀링 시간
 */
export default function useWindowSize(throttleMs?: number) {
  const [state, setState] = useState<State>({
    width: 0,
    height: 0,
  });
  const throttledResizeHandler = useThrottle(() => {
    setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, throttleMs ?? 0);

  useEffect(() => {
    if (!isBrowser()) return;

    // mount시
    setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener("resize", throttledResizeHandler);

    return () => {
      window.removeEventListener("resize", throttledResizeHandler);
    };
  }, []);

  return state;
}
