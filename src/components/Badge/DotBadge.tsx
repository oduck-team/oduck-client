import styled from "@emotion/styled";

import { BadgeProps } from ".";

export const DotBadge = styled.span<BadgeProps>(
  ({ color = "primary", theme }) => ({
    display: "inline-block",
    height: "8px",
    minWidth: "8px",
    borderRadius: "999px",
    backgroundColor: theme.colors[color]["60"],
  }),
);
