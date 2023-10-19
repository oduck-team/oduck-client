import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { SkeletonProps } from ".";

const pulse = keyframes`
  50% {
    opacity: .5;
  }
`;

export const SkeletonContainer = styled.div<SkeletonProps>`
  height: ${({ h }) => (h === "full" ? "100%" : `${h}px`)};
  width: ${({ w }) => (w === "full" ? "100%" : `${w}px`)};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ theme }) => theme.colors.neutral["20"]};
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;
