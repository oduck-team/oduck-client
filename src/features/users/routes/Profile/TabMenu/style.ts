import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { MENU } from "@/features/users/hooks/useTabMenu";

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

export const ContentContainer = styled.div`
  padding: 0 16px;
  border-top: 2px solid ${({ theme }) => theme.colors.neutral["05"]};
`;

export const Target = styled.div`
  position: relative;
  top: -15px;
  background-color: transparent;
  height: 15px;
`;
