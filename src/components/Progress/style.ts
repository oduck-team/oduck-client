import styled from "@emotion/styled";

import { ProgressProps } from ".";

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
      backgroundColor: theme.colors[color]["60"],
      borderRadius: isRounded ? "999px" : 0,
    },
  }),
);
