import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps } from "react";

import { ButtonColor, Size } from "./Button";

export interface CommonProps extends ComponentProps<"button"> {
  readonly size?: Size;
}

export interface SolidOrOutlineProps extends ComponentProps<"button"> {
  readonly color?: ButtonColor;
}

// 공통 스타일
export const CommonButton = styled.button<CommonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;

  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          height: 24px;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 12px;
        `;
      case "md":
        return css`
          height: 32px;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 14px;
        `;
      case "lg":
        return css`
          height: 40px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 16px;
        `;
      default: // md
        return css`
          height: 32px;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 14px;
        `;
    }
  }}
`;

// solid, outline 공통 스타일
export const SolidOrOutlineStyle = css`
  flex-shrink: 0;
  box-shadow: 0px 2px 4px 0px rgba(221, 221, 221, 0.1);
  font-style: normal;
  font-weight: 500;
  line-height: 1;
`;
