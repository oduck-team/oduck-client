import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { BadgeProps } from ".";

export const Container = styled.span<BadgeProps>`
  padding: 2px 6px;
  border-radius: 999px;

  ${({ color = "primary", styleType, theme }) => css`
    color: ${styleType === "fill" ? "white" : theme.colors[color]["60"]};
    background-color: ${styleType === "fill"
      ? theme.colors[color]["60"]
      : "transparent"};
  `}
`;

export const DotBadge = styled.span<BadgeProps>`
  display: flex;
  height: 8px;
  min-width: 8px;
  border-radius: 999px;

  ${({ color = "primary", theme }) => css`
    background-color: ${theme.colors[color]["60"]};
  `}
`;
