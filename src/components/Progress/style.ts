import styled from "@emotion/styled";

import { theme } from "@/styles/theme";

import { ProgressProps } from ".";

type Color = keyof typeof theme.colors;

export const ProgressContainer = styled.div<ProgressProps>(
  ({ color = "primary", value, height, isRounded, theme }) => ({
    height,
    width: "100%",
    backgroundColor: theme.colors.neutral["20"],
    borderRadius: isRounded ? "999px" : 0,
    overflow: "hidden",

    // progress bar
    "& div": {
      height: "100%",
      width: `${value}%`,
      backgroundColor:
        color in theme.colors ? theme.colors[color as Color]["60"] : color,
      borderRadius: isRounded ? "999px" : 0,
    },
  }),
);
