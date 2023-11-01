import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";

import { getAnimation } from "../SnackBar/style";

import { ToastPosition, ToastProps } from ".";

interface ToastStyleProps extends Pick<ToastProps, "position"> {
  hasButton?: boolean;
}

const ToastListPosition: Record<ToastPosition, SerializedStyles> = {
  top: css`
    top: 10px;
  `,
  bottom: css`
    bottom: 76px;
  `,
};

export const ToastPortalContainer = styled.div`
  width: 100%;
  height: 100dvh;
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndex.toast};
  padding: 10px 0px 76px;
`;

export const ToastListContainer = styled.div<Pick<ToastProps, "position">>`
  width: calc(100% - 32px);
  max-width: calc(600px - 32px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${({ position = "bottom" }) => ToastListPosition[position]};
`;

export const ToastContainer = styled.div<ToastStyleProps>`
  width: 100%;
  height: ${({ hasButton = false }) => (!hasButton ? "70px" : "110px")};
  box-shadow:
    0px 8px 24px -4px rgba(24, 39, 75, 0.08),
    0px 6px 12px -6px rgba(24, 39, 75, 0.12);
  background-color: white;
  border-radius: 8px;
  padding: 24px 16px;
  z-index: ${({ theme }) => theme.zIndex.toast};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  pointer-events: all;
  gap: 10px;

  ${({ theme }) => theme.typo["body-2-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["90"]};

  svg {
    width: 20px;
    height: 20px;
  }

  & > button {
    width: 100%;
  }

  ${({ position = "bottom" }) => css`
    animation: ${getAnimation(position)} 0.3s;
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div<Pick<ToastProps, "iconColor">>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${({ iconColor = "neutral", theme }) =>
      iconColor === "secondary"
        ? theme.colors[iconColor]["70"]
        : theme.colors[iconColor]["60"]};
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 14px;

  svg {
    display: block;
  }
  button {
    padding: 0;
    width: fit-content;
    height: fit-content;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 21px;
  background-color: ${({ theme }) => theme.colors["neutral"]["60"]};
`;
