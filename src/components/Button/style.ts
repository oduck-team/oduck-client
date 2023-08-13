import { SerializedStyles, Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

import { Size, Color, ButtonProps, Style } from ".";

const sizes: Record<Size, SerializedStyles> = {
  sm: css`
    height: 24px;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 12px;
  `,
  md: css`
    height: 32px;
    padding: 6px 14px;
    border-radius: 6px;
    font-size: 14px;
  `,
  lg: css`
    height: 40px;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 16px;
  `,
};

function getButtonStyle(styleType: Style, color: Color, theme: Theme) {
  const isNeutral = color === "neutral";
  const solidColor = isNeutral
    ? theme.colors["neutral"]["20"]
    : theme.colors[color]["60"];
  const solidPressedColor = isNeutral
    ? theme.colors["neutral"]["30"]
    : theme.colors[color]["80"];
  const styles: Record<Style, SerializedStyles> = {
    solid: css`
      color: ${isNeutral ? theme.colors["neutral"]["90"] : "white"};
      background-color: ${solidColor};
      border: 1px solid ${solidColor};

      // disabled
      &:disabled {
        color: "white";
        background-color: ${theme.colors["neutral"][40]};
        border: 1px solid ${theme.colors["neutral"][40]};
        cursor: not-allowed;
      }

      // pressed
      &:not([disabled]):active {
        background-color: ${solidPressedColor};
        border: 1px solid ${solidPressedColor};
      }
    `,
    outline: css`
      color: ${isNeutral
        ? theme.colors["neutral"]["90"]
        : theme.colors[color]["60"]};
      background-color: white;
      border: 1px solid
        ${isNeutral ? theme.colors["neutral"]["30"] : theme.colors[color]["60"]};

      // disabled
      &:disabled {
        color: ${theme.colors["neutral"]["30"]};
        border: 1px solid ${theme.colors["neutral"]["30"]};
        cursor: not-allowed;
      }

      // pressed
      &:not([disabled]):active {
        background-color: ${theme.colors["neutral"]["10"]};
        ${!isNeutral && `border-color: ${theme.colors[color]["80"]};`} // 80 90
        ${!isNeutral && `color: ${theme.colors[color]["80"]};`}// 80 90
      }
    `,
    text: css`
      color: ${isNeutral
        ? theme.colors["neutral"]["90"]
        : theme.colors[color]["60"]};
      background-color: rgba(0, 0, 0, 0); // 60 90
      border: 1px solid rgba(0, 0, 0, 0);

      // disabled
      &:disabled {
        color: ${theme.colors["neutral"]["30"]};
        cursor: not-allowed;
      }

      // pressed
      &:not([disabled]):active {
        background-color: ${theme.colors["neutral"]["10"]};
        border: 1px solid ${theme.colors["neutral"]["10"]};
        ${!isNeutral && `color: ${theme.colors[color]["80"]};`}
      }
    `,
  };

  return styles[styleType];
}
export const Container = styled.button<
  Pick<ButtonProps, "styleType" | "color" | "size">
>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;

  ${({ styleType = "solid", color = "primary", size = "md", theme }) => css`
    ${sizes[size]}
    ${getButtonStyle(styleType, color, theme)}
  `}
`;
