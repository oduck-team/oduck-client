import { css } from "@emotion/react";
import styled from "@emotion/styled";

import {
  CommonButton,
  SolidOrOutlineProps,
  SolidOrOutlineStyle,
} from "./styles";

export const SolidButton = styled(CommonButton)<SolidOrOutlineProps>`
  ${SolidOrOutlineStyle}
  ${({ color = "primary", theme }) => {
    let styleColor: string = theme.colors[color]["60"];
    if (color === "neutral") styleColor = theme.colors["neutral"]["20"];
    const activeColor =
      color === "neutral"
        ? theme.colors["neutral"][30]
        : theme.colors[color][80];

    return css`
      // default
      color: ${color === "neutral" ? theme.colors["neutral"]["80"] : "white"};
      background-color: ${styleColor};
      border: 1px solid ${styleColor};
      // border가 없는 경우, OutlineButton과 약간의 사이즈 차이가 있어서 추가했습니다.

      // disabled
      &:disabled {
        color: "white";
        background-color: ${theme.colors["neutral"][40]};
        border: 1px solid ${theme.colors["neutral"][40]};
        cursor: default;
      }

      // pressed
      &:not([disabled]):active {
        background-color: ${activeColor};
        border: 1px solid ${activeColor};
      }
    `;
  }}
`;
