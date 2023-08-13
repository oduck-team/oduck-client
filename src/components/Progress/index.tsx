import { theme } from "@/styles/theme";

import { Container } from "./style";

export interface ProgressProps {
  readonly max?: number;
  readonly min?: number;
  readonly value?: number;
  readonly color?: keyof typeof theme.colors;
  readonly height?: number;
  readonly isRounded?: boolean;
}

export default function Progress({
  max = 100,
  min = 0,
  value = 0,
  color = "primary",
  height = 12,
  isRounded = false,
}: ProgressProps) {
  return (
    <Container
      value={value}
      color={color}
      height={height}
      isRounded={isRounded}
    >
      <div
        role="progressbar"
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
      ></div>
    </Container>
  );
}