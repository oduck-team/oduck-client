import { useEffect, useRef, useState, useCallback } from "react";

import {
  CaretIcon,
  DropDownList,
  Option,
  Select,
  SelectBoxContainer,
} from "./style";

type Direction = typeof ARROW_UP | typeof ARROW_DOWN;

const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ENTER = "Enter";

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
        cursor.current === 0
          ? listRef.current?.scrollTo({ top: 0 })
          : listRef.current?.scrollBy({ top: 32 });
        return;
      }

      if (direction === "ArrowUp") {
        cursor.current === options.length - 1
          ? listRef.current?.scrollTo({
              top: listRef.current?.childElementCount * 32,
            })
          : listRef.current?.scrollBy({ top: -32 });
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

  useEffect(() => {
    const selectBoxEl = selectBoxtRef.current;
    if (listVisible) {
      selectBoxEl?.addEventListener("keydown", keyHandler);
    }

    return () => {
      selectBoxEl?.removeEventListener("keydown", keyHandler);
    };
  }, [keyHandler, listVisible]);

  return (
    <SelectBoxContainer ref={selectBoxtRef} tabIndex={0}>
      <Select selected={selected} onClick={handleListToggle}>
        {selected.text}
        <CaretIcon size={18} />
      </Select>

      {listVisible && (
        <DropDownList ref={listRef}>
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
