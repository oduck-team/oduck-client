import { useEffect, useRef, useState } from "react";

import {
  CaretIcon,
  DropDownList,
  Option,
  Select,
  SelectBoxContainer,
} from "./style";

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
  const handleListToggle = () => setListVisible((prev) => !prev);
  const handleOptionClick = (value: string, text: string) => {
    onChange(value, text);
    handleListToggle();
  };

  useEffect(() => {
    const selectBoxEl = selectBoxtRef.current;

    const downHandler = (e: KeyboardEvent) => {
      if (e.key === ARROW_DOWN) {
        cursor.current =
          cursor.current < options.length - 1 ? cursor.current + 1 : 0;

        onChange(options[cursor.current].value, options[cursor.current].text);
      }
    };

    const upHandler = (e: KeyboardEvent) => {
      if (e.key === ARROW_UP) {
        cursor.current =
          cursor.current > 0 ? cursor.current - 1 : options.length - 1;

        onChange(options[cursor.current].value, options[cursor.current].text);
      }
    };

    const enterHandler = (e: KeyboardEvent) => {
      if (e.key === ENTER) {
        onChange(options[cursor.current].value, options[cursor.current].text);
        handleListToggle();
      }
    };

    if (listVisible) {
      selectBoxEl?.addEventListener("keydown", downHandler);
      selectBoxEl?.addEventListener("keydown", upHandler);
      selectBoxEl?.addEventListener("keyup", enterHandler);
    }

    return () => {
      selectBoxEl?.removeEventListener("keydown", downHandler);
      selectBoxEl?.removeEventListener("keydown", upHandler);
      selectBoxEl?.removeEventListener("keyup", enterHandler);
    };
  }, [listVisible, onChange, options]);

  return (
    <SelectBoxContainer ref={selectBoxtRef} tabIndex={0}>
      <Select selected={selected} onClick={handleListToggle}>
        {selected.text}
        <CaretIcon size={18} />
      </Select>

      {listVisible && (
        <DropDownList>
          {options.map(({ value, text }, index) => (
            <Option
              key={value}
              index={index}
              cursor={cursor.current}
              onClick={() => handleOptionClick(value, text)}
            >
              {text}
            </Option>
          ))}
        </DropDownList>
      )}
    </SelectBoxContainer>
  );
}
