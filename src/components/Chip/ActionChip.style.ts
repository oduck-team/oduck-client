import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";

import { ActionChipProps } from "./ActionChip";

import { Size } from ".";

export const Sizes: Record<Size, SerializedStyles> = {
  sm: css`
    height: 28px;
  `,
  md: css`
    height: 32px;
  `,
  lg: css`
    height: 36px;
  `,
};

export const ActionChipContainer = styled.button<ActionChipProps>`
  width: fit-content;
  ${({ size = "md" }) => Sizes[size]}
  padding: 8px 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors["primary"]["50"]};
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors["primary"]["60"]};
  ${({ theme }) => theme.typo["body-2-m"]};
  letter-spacing: normal;
  cursor: pointer;
`;
