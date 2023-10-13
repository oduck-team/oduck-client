import { useEffect, useRef, useState, useCallback } from "react";

import useScrollLock from "@/hooks/useScrollLock";

import {
  CaretIcon,
  DropDownList,
  OPTION_HEIGHT,
  Option,
  SHOW_MAX_OPTION,
  Select,
  SelectBoxContainer,
} from "./style";

type Direction = typeof ARROW_UP | typeof ARROW_DOWN;

const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ENTER = "Enter";

export type Position = "bottom" | "top";

interface Option {
  value: string;
  text: string;
}

export interface SelectBoxProps {
  options: Option[];
  /** option이 선택되면 SelectBox의 border 색상 변경 옵션 */
  selected: Option;
  onChange: (value: string, text: string) => void;
}

export default function SelectBox({
  options,
  selected,
  onChange,
}: SelectBoxProps) {
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

  useEffect(() => {
    const selectBoxEl = selectBoxtRef.current;
    if (listVisible) {
      selectBoxEl?.addEventListener("keydown", keyHandler);
    }

    return () => {
      selectBoxEl?.removeEventListener("keydown", keyHandler);
    };
  }, [keyHandler, listVisible]);

  useEffect(() => {
    if (listVisible) {
      const windowHeight = window.innerHeight;
      const listHeight = listRef.current?.offsetHeight ?? 0;
      const selectBoxPosition =
        selectBoxtRef.current?.getBoundingClientRect().bottom ?? 0;

      if (windowHeight - selectBoxPosition < listHeight) {
        setPosition("top");
        return;
      }

      setPosition("bottom");
    }
  }, [listVisible]);

  useEffect(() => {
    if (!listVisible) return;

    document.addEventListener("click", closeList);
    return () => document.removeEventListener("click", closeList);
  }, [listVisible]);

  return (
    <SelectBoxContainer ref={selectBoxtRef} tabIndex={0}>
      <Select selected={selected} onClick={handleListToggle}>
        {selected.text}
        <CaretIcon size={18} />
      </Select>

      {listVisible && (
        <DropDownList ref={listRef} position={position}>
          {options.map(({ value, text }, index) => (
            <Option
              key={value}
              index={index}
              cursor={cursor.current}
              onClick={() => handleOptionClick(value, text, index)}
            >
              {text}
            </Option>
          ))}
        </DropDownList>
      )}
    </SelectBoxContainer>
  );
}
