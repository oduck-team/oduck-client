import styled from "@emotion/styled";

import { theme } from "@/styles/theme";

const Container = styled.div<ProgressProps>(
  ({ color, value, height, isRounded, theme }) => ({
    height,
    backgroundColor: theme.colors[color!]["10"],
    borderRadius: isRounded ? "999px" : 0,
    overflow: "hidden",

    // progress bar
    "& div": {
      height: "100%",
      width: `${value}%`,
      backgroundColor: theme.colors[color!]["60"],
    },
  }),
);

interface ProgressProps {
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
