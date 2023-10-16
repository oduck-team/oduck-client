import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";

import { CheckBoxProps, Size } from ".";

const CheckBoxSizes: Record<Size, SerializedStyles> = {
  md: css`
    height: 16px;
    width: 16px;
  `,
  lg: css`
    height: 24px;
    width: 24px;
  `,
};

export const CheckboxContainer = styled.div<Pick<CheckBoxProps, "size">>`
  position: relative;
  ${({ size = "md" }) => css`
    ${CheckBoxSizes[size]}
  `}

  & > input[type="checkbox"] {
    border-radius: 2px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;

    ${({ size = "md" }) => css`
      ${CheckBoxSizes[size]}
    `}
  }

  & > svg {
    ${({ size = "md" }) => css`
      ${CheckBoxSizes[size]}
    `}
  }
`;

export const Input = styled.input`
  position: absolute;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.neutral["30"]};
  border: 1px solid ${({ theme }) => theme.colors.neutral["30"]};
  cursor: pointer;

  &:disabled {
    background: ${({ theme }) => theme.colors.neutral["30"]};
    cursor: not-allowed;
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary["60"]};
    border: none;
  }

  & + svg {
    position: absolute;
    left: 0;
    top: 0;
    margin: auto;
    pointer-events: none;
    scale: 0.9;
    opacity: 0;
  }

  &:checked + svg {
    opacity: 1;
  }
`;
