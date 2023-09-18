import { useCallback, useEffect, useRef } from "react";

/**
 * 함수에 debounce를 적용시키는 hook입니다
 * ms 이내의 callback 호출을 마지막 한 번만 호출합니다
 */
export default function useDebounce<T extends unknown[], R>(
  callback: (...args: T) => Promise<R> | R,
  ms: number,
) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const debounce = useCallback(
    (...args: T) => {
      // 이전 타이머가 있다면 취소하고 새 타이머 설정
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(async () => await callback(...args), ms);
    },
    [callback, ms],
  );

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return debounce;
}
