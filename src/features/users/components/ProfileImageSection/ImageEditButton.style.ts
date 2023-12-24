import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PlusCircle } from "@phosphor-icons/react";

export const ImageEditButtonContainer = styled.div<{
  borderRadius: string;
  height: string | number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  width: 100%;
  height: ${({ height }) => (height === "100%" ? "100%" : `${height}px`)};
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  cursor: pointer;

  ${({ borderRadius }) =>
    borderRadius === "50%" &&
    css`
      border-radius: 50%;
    `}
`;

export const PlusCircleIcon = styled(PlusCircle)`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.colors.neutral["05"]};
  transform: translate(-50%, -50%);
  transition: transform linear 0.2s;

  &.resetIcon {
    color: ${({ theme }) => theme.colors.warn["50"]};
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
