import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Header = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  gap: 0.5rem;
  margin: 0.25rem;
  overflow: hidden;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${({ isCollapsed }) => css`
    padding-left: ${isCollapsed ? 0 : 0.7}rem;
  `}

  & h1 {
    display: none;
  }
`;
