import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { LoaderProps } from ".";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

export const LoaderContainer = styled.div<Pick<LoaderProps, "display">>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  width: 100%;

  & img {
    --size: 96px;
    height: var(--size);
    width: var(--size);
    animation: ${bounce} 1.5s infinite;
  }

  ${({ display }) =>
    display === "oduck" &&
    css`
      height: auto;

      & img {
        --size: 48px;
        height: var(--size);
        width: var(--size);
      }
    `}
`;
