import {
  CaretIcon,
  DropDownList,
  Option,
  Select,
  SelectBoxContainer,
} from "./style";
import useSelectBox from "./useSelectBox";

export interface Option {
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
  const {
    selectBoxtRef,
    listRef,
    listVisible,
    position,
    cursor,
    handleListToggle,
    handleOptionClick,
  } = useSelectBox(options, onChange);

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
