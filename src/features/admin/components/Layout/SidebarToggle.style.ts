import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { SidebarToggleProps } from "./SidebarToggle";

export const Container = styled.div<SidebarToggleProps>`
  position: fixed;
  bottom: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  transition: all 0.2s;

  ${({ isCollapsed, width, collapsedWidth }) => css`
    width: ${isCollapsed ? collapsedWidth : width}px;
  `}
`;
