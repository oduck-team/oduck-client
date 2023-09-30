import { SerializedStyles, Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

import { Size, Color, ButtonProps, Variant } from ".";

const buttonSizes: Record<Size, SerializedStyles> = {
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
  xl: css`
    height: 48px;
    padding: 8px 20px;
    border-radius: 10px;
    font-size: 16px;
  `,
};

function getButtonStyle(variant: Variant, color: Color, theme: Theme) {
  const isNeutral = color === "neutral";
  const solidColor = isNeutral
    ? theme.colors["neutral"]["10"]
    : theme.colors[color]["60"];
  const solidPressedColor = isNeutral
    ? theme.colors["neutral"]["30"]
    : theme.colors[color]["80"];
  const styles: Record<Variant, SerializedStyles> = {
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
        ${!isNeutral && `border-color: ${theme.colors[color]["80"]};`}
        ${!isNeutral && `color: ${theme.colors[color]["80"]};`}
      }
    `,
    text: css`
      color: ${isNeutral
        ? theme.colors["neutral"]["90"]
        : theme.colors[color]["60"]};
      background-color: rgba(0, 0, 0, 0);
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

  return styles[variant];
}

const baseStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
`;

export const ButtonContainer = styled.button<
  Pick<ButtonProps, "variant" | "color" | "size" | "isBlock">
>`
  ${baseStyle}
  width: ${({ isBlock }) => (isBlock ? "100%" : "auto")};

  ${({ variant = "solid", color = "primary", size = "md", theme }) => css`
    ${buttonSizes[size]}
    ${getButtonStyle(variant, color, theme)}
  `}
`;

const iconButtonSizes: Record<Size, SerializedStyles> = {
  sm: css`
    height: 24px;
    width: 24px;
    font-size: 14px;
  `,
  md: css`
    height: 32px;
    width: 32px;
    font-size: 16px;
  `,
  lg: css`
    height: 40px;
    width: 40px;
    font-size: 20px;
  `,
  xl: css`
    height: 48px;
    width: 48px;
    font-size: 20px;
  `,
};

export const IconButtonContainer = styled.button<
  Pick<ButtonProps, "variant" | "color" | "size">
>`
  ${baseStyle}
  border-radius: 999px;

  ${({ variant = "solid", color = "primary", size = "md", theme }) => css`
    ${iconButtonSizes[size]}
    ${getButtonStyle(variant, color, theme)}
  `}
`;

export const IconWrapper = styled.span`
  ${baseStyle}
`;

/**
 *   다음 구조에서 시각적으로 중앙정렬 하기위해 적용하는 css
 *   <span>icon</span> <span>children</span>
 *   없으면 아이콘 이미지 자체 공백때문에 버튼 컨텐츠 정렬이 어색해진다
 */
export const ContentWrapper = styled.span`
  display: flex;
  align-items: center;

  & > span + span {
    margin-left: 0.4em;
  }
`;
