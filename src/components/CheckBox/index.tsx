import { IconoirProvider, Check } from "iconoir-react";

import { Container } from "./style";

export type Size = "lg" | "md";

export interface StyleProps {
  size?: Size;
  checked?: boolean;
  disabled?: boolean;
}

interface CheckBoxProps extends StyleProps {
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
      <Container
        size={size}
        onClick={onClick}
        checked={checked}
        disabled={disabled}
      >
        {checked && <Check />}
      </Container>
    </IconoirProvider>
  );
}
