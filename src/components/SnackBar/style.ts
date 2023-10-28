import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { Position, SnackBarProps } from ".";

export const SnackBarContainer = styled.div<Pick<SnackBarProps, "position">>`
  --side-padding: 32px; // 16 * 2
  width: calc(100vw - var(--side-padding));
  max-width: calc(600px - var(--side-padding));
  height: 40px;
  background-color: ${({ theme }) => theme.colors.neutral[90]};
  color: ${({ theme }) => theme.colors.neutral["05"]};
  ${({ theme }) => theme.typo["body-2-m"]}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  z-index: ${({ theme }) => theme.zIndex.snackbar};
  margin-bottom: 4px;
  cursor: pointer;

  ${({ position = "bottom" }) => css`
    animation: ${getAnimation(position)} 0.3s;
  `}
`;

function getAnimation(position: Position) {
  if (position === "top") return fadeinTopToBottom;
  if (position === "bottom") return fadeinBottomToTop;
}

const fadeinTopToBottom = keyframes`
  from { transform: translateY(-100%); opacity: 0 }
  to { transform: translateY(0); opacity: 1 }
`;

const fadeinBottomToTop = keyframes`
  from { transform: translateY(100%); opacity: 0 }
  to { transform: translateY(0); opacity: 1 }
`;
