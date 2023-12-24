import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ImageEditButtonContainer = styled.div<{ borderRadius: string }>`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  width: 100%;
  height: 160px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  cursor: pointer;

  ${({ borderRadius }) =>
    borderRadius === "50%" &&
    css`
      border-radius: 50%;
    `}
`;

export const IconContainer = styled.div<{ hasXButton: boolean }>`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ hasXButton }) =>
    hasXButton &&
    css`
      top: calc(50% + 8px);
    `}
`;

export const XButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -8px;
  left: 8px;
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 8px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.warn[50]};
  transition: color ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.warn[30]};
  }
`;
