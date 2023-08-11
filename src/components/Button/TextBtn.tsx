import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ComponentProps } from "react";
import { CommonBtn } from "./styles";
import { ButtonColor, Size } from "./Button";

export interface TextProps extends ComponentProps<"button"> {
  readonly color?: ButtonColor;
  readonly size?: Size;
}

export const TextBtn = styled(CommonBtn)<TextProps>`
  ${({ color = "primary", size = "md", theme }) => {
    let styleColor: string = theme.colors[color]["60"];
    let activeColor: string = theme.colors[color]["80"];
    if (color === "neutral") {
      styleColor = theme.colors[color]["90"];
      activeColor = theme.colors[color]["50"];
    }

    let fontStyle = theme.typo["body-2-m"];
    if (size === "lg") fontStyle = theme.typo["body-1-m"];
    else if (size === "sm") fontStyle = theme.typo["body-3-m"];

    return css`
      // default
      color: ${styleColor};
      background-color: rgba(0, 0, 0, 0);
      border: none;
      border-radius: 0;
      padding: 0;
      height: auto;
      ${fontStyle};

      // disabled
      &:disabled {
        color: ${theme.colors["neutral"]["30"]};
        cursor: default;
      }

      // pressed
      &:not([disabled]):active {
        color: ${activeColor};
      }
    `;
  }}
`;
