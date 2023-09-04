import { ComponentProps } from "react";

import { theme } from "@/styles/theme";

import { Container } from "./style";

export interface ProgressProps extends ComponentProps<"div"> {
  max?: number;
  min?: number;
  value?: number;
  color?: keyof typeof theme.colors;
  height?: number;
  isRounded?: boolean;
}

export default function Progress({
  max = 100,
  min = 0,
  value = 0,
  color = "primary",
  height = 12,
  isRounded = false,
  ...props
}: ProgressProps) {
  return (
    <Container
      value={value}
      color={color}
      height={height}
      isRounded={isRounded}
      {...props}
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
