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

export const CheckboxContainer = styled.button<
  Pick<CheckBoxProps, "size" | "checked">
>`
  ${({ size = "md" }) => css`
    ${CheckBoxSizes[size]}
  `}
  border-radius: 2px;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.primary["60"] : "#ffffff"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: ${({ checked, theme }) =>
    !checked ? `1px solid ${theme.colors.neutral["30"]}` : "none"};

  &:disabled {
    background: ${({ theme }) => theme.colors.neutral["30"]};
    cursor: not-allowed;
  }
`;
