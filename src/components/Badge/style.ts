import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { BadgeProps } from ".";

export const BadgeContainer = styled.span<BadgeProps>`
  padding: 2px 6px;
  border-radius: 999px;

  ${({ color = "primary", variant, theme }) => css`
    color: ${variant === "fill" ? "white" : theme.colors[color]["60"]};
    background-color: ${variant === "fill"
      ? theme.colors[color]["60"]
      : "transparent"};
  `}
`;

export const DotBadgeContainer = styled.span<BadgeProps>`
  display: flex;
  height: 8px;
  min-width: 8px;
  border-radius: 999px;

  ${({ color = "primary", theme }) => css`
    background-color: ${theme.colors[color]["60"]};
  `}
`;
