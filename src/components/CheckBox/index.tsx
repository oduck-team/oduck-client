import { IconoirProvider, Check } from "iconoir-react";

import { CheckboxContainer } from "./style";

export type Size = "lg" | "md";

export interface CheckBoxProps {
  size?: Size;
  checked?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export default function CheckBox({
  disabled = false,
  checked = false,
  onClick,
  size,
}: CheckBoxProps) {
  return (
    <IconoirProvider
      iconProps={{
        color: `${disabled ? "#9D9D9E" : "#ffffff"}`,
        strokeWidth: 2,
      }}
    >
      <CheckboxContainer
        size={size}
        onClick={onClick}
        checked={checked}
        disabled={disabled}
      >
        {checked && <Check />}
      </CheckboxContainer>
    </IconoirProvider>
  );
}
