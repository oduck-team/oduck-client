import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

import { ReviewCardProps } from ".";

export const ReviewCardContainer = styled.article<
  Pick<ReviewCardProps, "isBlock" | "isBorderTop"> & { cursorPointer: boolean }
>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[10]};

  ${({ theme, isBlock = false, isBorderTop = true, cursorPointer }) =>
    getStyle(theme, isBlock, isBorderTop, cursorPointer)}
`;

function getStyle(
  theme: Theme,
  isBlock: boolean,
  isBorderTop: boolean,
  cursorPointer: boolean,
) {
  let isBlockStyle;
  let isBorderTopStyle;
  let cursorStyle;

  if (isBlock) {
    isBlockStyle = `
      margin: 0 -16px;
      padding: 16px;
    `;
  } else {
    isBlockStyle = `
      padding: 16px 0;
    `;
  }

  if (isBorderTop) {
    isBorderTopStyle = `
      border-top: 1px solid ${theme.colors.neutral[10]};
    `;
  }

  if (cursorPointer) {
    cursorStyle = `
      cursor: pointer;
    `;
  }

  return css`
    ${isBlockStyle};
    ${isBorderTopStyle};
    ${cursorStyle}
  `;
}
