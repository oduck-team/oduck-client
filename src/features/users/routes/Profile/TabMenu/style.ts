import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { MENU } from ".";

export const Tab = styled.div`
  display: flex;
`;

export const TabButton = styled.button<{ selected: MENU; text: MENU }>`
  ${({ theme }) => theme.typo["body-2-m"]}
  width: 100%;
  background-color: #fff;
  border: none;
  background-color: transparent;
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.neutral[50]};
  cursor: pointer;
  border-bottom: 2px solid transparent;
  position: relative;
  top: 2px;

  ${({ theme, selected, text }) =>
    selected === text &&
    css`
      color: ${theme.colors.primary[60]};
      border-bottom: 2px solid ${theme.colors.primary[60]};
    `}
`;
