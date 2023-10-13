import { useState } from "react";

import {
  CaretIcon,
  DropDownList,
  Option,
  Select,
  SelectBoxContainer,
} from "./style";

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
  const handleListToggle = () => setListVisible((prev) => !prev);
  const handleOptionClick = (value: string, text: string) => {
    onChange(value, text);
    handleListToggle();
  };

  return (
    <SelectBoxContainer>
      <Select selected={selected} onClick={handleListToggle}>
        {selected.text}
        <CaretIcon size={18} />
      </Select>
      {listVisible && (
        <DropDownList>
          {options.map(({ value, text }) => (
            <Option key={value} onClick={() => handleOptionClick(value, text)}>
              {text}
            </Option>
          ))}
        </DropDownList>
      )}
    </SelectBoxContainer>
  );
}
