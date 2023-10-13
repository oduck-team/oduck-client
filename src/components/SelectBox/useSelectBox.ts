import { useEffect, useRef, useState, useCallback } from "react";

import useScrollLock from "@/hooks/useScrollLock";

import { OPTION_HEIGHT, SHOW_MAX_OPTION } from "./style";

import { Option } from ".";

type Direction = typeof ARROW_UP | typeof ARROW_DOWN;

const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ENTER = "Enter";

export type Position = "bottom" | "top";

export default function useSelectBox(
  options: Option[],
  onChange: (value: string, text: string) => void,
) {
  const [listVisible, setListVisible] = useState(false);
  useScrollLock(listVisible);
  const [position, setPosition] = useState<Position>("bottom");
  const cursor = useRef(0);
  const selectBoxtRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const handleListToggle = () => setListVisible((prev) => !prev);
  const handleOptionClick = (value: string, text: string, index: number) => {
    onChange(value, text);
    cursor.current = index;
    handleListToggle();
  };

  const scrollToSelectedOption = useCallback(
    (direction: Direction) => {
      if (direction === "ArrowDown") {
        cursor.current >= SHOW_MAX_OPTION
          ? listRef.current?.scrollBy({ top: OPTION_HEIGHT })
          : listRef.current?.scrollTo({ top: 0 });
        return;
      }

      if (direction === "ArrowUp") {
        cursor.current <= options.length - 1 - SHOW_MAX_OPTION
          ? listRef.current?.scrollBy({ top: -OPTION_HEIGHT })
          : listRef.current?.scrollTo({
              top: listRef.current?.childElementCount * OPTION_HEIGHT,
            });
        return;
      }
    },
    [options.length],
  );

  const keyHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === ARROW_DOWN) {
        cursor.current =
          cursor.current < options.length - 1 ? cursor.current + 1 : 0;

        onChange(options[cursor.current].value, options[cursor.current].text);
        scrollToSelectedOption(e.key);
        return;
      }

      if (e.key === ARROW_UP) {
        cursor.current =
          cursor.current > 0 ? cursor.current - 1 : options.length - 1;

        onChange(options[cursor.current].value, options[cursor.current].text);
        scrollToSelectedOption(e.key);
        return;
      }

      if (e.key === ENTER) {
        onChange(options[cursor.current].value, options[cursor.current].text);
        handleListToggle();
        return;
      }
    },
    [onChange, options, scrollToSelectedOption],
  );

  const closeList = (e: MouseEvent) => {
    const selectBoxEl = selectBoxtRef.current;
    if (selectBoxEl && !selectBoxEl.contains(e.target as Node)) {
      setListVisible(false);
    }
  };

  /** 엔터, 위 아래 방향키 이벤트 처리 */
  useEffect(() => {
    if (!listVisible) return;

    const selectBoxEl = selectBoxtRef.current;
    selectBoxEl?.addEventListener("keydown", keyHandler);

    return () => {
      selectBoxEl?.removeEventListener("keydown", keyHandler);
    };
  }, [keyHandler, listVisible]);

  /** viewport 하단 영역이 부족한 경우, list를 상단에 렌더링 */
  useEffect(() => {
    if (!listVisible) return;

    const windowHeight = window.innerHeight;
    const listHeight = listRef.current?.offsetHeight ?? 0;
    const selectBoxPosition =
      selectBoxtRef.current?.getBoundingClientRect().bottom ?? 0;

    if (windowHeight - selectBoxPosition < listHeight) {
      setPosition("top");
      return;
    }

    setPosition("bottom");
  }, [listVisible]);

  /** dropdown list 바깥 영역 클릭 시, list 닫기 */
  useEffect(() => {
    if (!listVisible) return;

    document.addEventListener("click", closeList);
    return () => document.removeEventListener("click", closeList);
  }, [listVisible]);

  return {
    selectBoxtRef,
    listRef,
    listVisible,
    position,
    cursor,
    handleListToggle,
    handleOptionClick,
  };
}
