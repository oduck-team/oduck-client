import styled from "@emotion/styled";

import { BadgeProps } from ".";

export const NumberBadge = styled.span<BadgeProps>(
  ({ color, styleType, theme }) => ({
    ...theme.typo["body-3-m"],
    padding: "2px 6px",
    borderRadius: "999px",
    color: styleType === "fill" ? "white" : theme.colors[color!]["60"],
    backgroundColor:
      styleType === "fill" ? theme.colors[color!]["60"] : "transparent",
  }),
);
