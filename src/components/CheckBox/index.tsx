import { Check } from "@phosphor-icons/react";

import { CheckboxContainer, Input } from "./style";

export type Size = "lg" | "md";

export interface CheckBoxProps {
  size?: Size;
  checked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onChange?: (value: boolean) => void;
}

export default function CheckBox({
  disabled = false,
  checked,
  onClick,
  onChange,
  size = "md",
}: CheckBoxProps) {
  return (
    <CheckboxContainer size={size} onClick={onClick}>
      <Input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange ? (e) => onChange(e.target.checked) : undefined}
      />
      <Check aria-hidden color="#fff" weight="bold" />
    </CheckboxContainer>
  );
}
