import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CommonBtn, SolidOrOutlineProps, SolidOrOutlineStyle } from "./styles";

export const OutlineBtn = styled(CommonBtn)<SolidOrOutlineProps>`
  ${SolidOrOutlineStyle}
  ${({ color = "primary", theme }) => {
    let styleColor: string = theme.colors[color]["60"];
    if (color === "neutral") styleColor = theme.colors[color]["30"];

    return css`
      // default
      color: ${color === "neutral"
        ? theme.colors["neutral"]["90"]
        : styleColor};
      background-color: white;
      border: 1px solid ${styleColor};

      // disabled
      &:disabled {
        color: ${theme.colors["neutral"]["30"]};
        border: 1px solid ${theme.colors["neutral"]["30"]};
        cursor: default;
      }

      // pressed
      &:not([disabled]):active {
        color: ${theme.colors[color]["80"]};
        background-color: ${color === "neutral"
          ? theme.colors["neutral"]["20"]
          : theme.colors["neutral"]["10"]};
        border: 1px solid
          ${color === "neutral"
            ? theme.colors["neutral"]["30"]
            : theme.colors[color]["80"]};
      }
    `;
  }}
`;
