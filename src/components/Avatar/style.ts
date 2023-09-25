import { SerializedStyles, Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

import { AvatarProps, Size } from ".";

const sizes: Record<Size, SerializedStyles> = {
  xs: css`
    height: 24px;
    width: 24px;
  `,
  sm: css`
    height: 32px;
    width: 32px;
  `,
  md: css`
    height: 48px;
    width: 48px;
  `,
  lg: css`
    height: 56px;
    width: 56px;
  `,
  xl: css`
    height: 80px;
    width: 80px;
  `,
};

export const Container = styled.span<Pick<AvatarProps, "size">>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 100%;

  ${({ size = "md", theme }) => css`
    background-color: ${theme.colors.neutral["50"]};
    ${sizes[size]}
  `}

  background-color: ${({ theme }) => theme.colors.neutral["60"]};
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserName = styled.span<Pick<AvatarProps, "size">>`
  color: white;

  ${({ size = "md", theme }) => getFontStyle(size, theme)}
`;

function getFontStyle(size: Size, theme: Theme) {
  const styles: Record<Size, SerializedStyles> = {
    xl: theme.typo["heading-3"],
    lg: theme.typo["title-1-m"],
    md: theme.typo["body-1-m"],
    sm: theme.typo["body-2-m"],
    xs: theme.typo["micro-m"],
  };

  return css`
    ${styles[size]}
  `;
}
