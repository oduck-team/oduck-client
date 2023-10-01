import { CaretIcon, Option, Select, SelectBoxContainer } from "./style";

interface Option {
  value: string;
  text: string;
}

export interface SelectBoxProps {
  options: Option[];
  /** option이 선택되면 SelectBox의 border 색상 변경 옵션 */
  selected: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectBox({
  options,
  selected,
  onChange,
}: SelectBoxProps) {
  return (
    <SelectBoxContainer>
      <Select selected={selected} onChange={(e) => onChange(e)}>
        {options.map(({ value, text }) => (
          <Option key={value} value={value}>
            {text}
          </Option>
        ))}
      </Select>
      <CaretIcon size={18} />
    </SelectBoxContainer>
  );
}
