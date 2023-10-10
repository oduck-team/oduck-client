import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Button = styled.button<{
  id: string;
  selectedID: string;
}>`
  ${({ theme }) => theme.typo["body-2-m"]}
  color: ${({ theme }) => theme.colors.neutral[80]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border: none;
  background-color: transparent;

  ${({ theme, id, selectedID }) =>
    id === selectedID &&
    css`
      background-color: ${theme.colors.neutral["05"]};
      & > span {
        color: ${theme.colors.neutral[80]};
      }
    `}
`;

export const ButtonText = styled.span`
  ${({ theme }) => theme.typo["body-2-m"]}
  color: ${({ theme }) => theme.colors.neutral[50]};
`;
