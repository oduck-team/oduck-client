import { Check } from "@phosphor-icons/react";

import { CheckboxContainer, Input } from "./style";

export type Size = "lg" | "md";

export interface CheckBoxProps {
  size?: Size;
  id?: string;
  name: string;
  checked: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckBox({
  disabled = false,
  id = "",
  name,
  checked,
  onClick,
  onChange,
  size = "md",
}: CheckBoxProps) {
  return (
    <CheckboxContainer size={size} onClick={onClick}>
      <Input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <Check aria-hidden color="#fff" weight="bold" />
    </CheckboxContainer>
  );
}
