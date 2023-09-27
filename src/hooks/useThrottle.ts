import { useCallback, useRef } from "react";

/**
 * 함수에 throttle를 적용시키는 hook입니다
 * 함수 호출을 ms동안 한번만 하도록 합니다
 */
export default function useThrottle<T extends unknown[], R>(
  callback: (...args: T) => Promise<R> | R,
  ms: number,
) {
  const lastExecuted = useRef<number | null>(null); // callback 마지막 호출 시간

  const throttle = useCallback(
    (...args: T) => {
      const now = Date.now();
      // 첫 호출인 경우 callback을 즉시 실행합니다
      if (!lastExecuted.current) {
        lastExecuted.current = now;
        callback(...args);
        return;
      }

      const timeLastExecution = now - lastExecuted.current;

      // 마지막 실행 시간이 ms 보다 크다면 callback 호출합니다
      if (timeLastExecution >= ms) {
        lastExecuted.current = now;
        callback(...args);
      }
    },
    [callback, ms],
  );

  return throttle;
}
