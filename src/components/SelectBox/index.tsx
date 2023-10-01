import { CaretIcon, Option, Select, SelectBoxContainer } from "./style";

interface Option {
  value: string;
  text: string;
}

export interface SelectBoxProps {
  options: Option[];
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
