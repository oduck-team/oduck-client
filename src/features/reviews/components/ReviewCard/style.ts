import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

import { ReviewCardProps } from ".";

export const ReviewCardContainer = styled.article<
  Pick<ReviewCardProps, "isBlock" | "isBorderTop">
>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[10]};

  ${({ theme, isBlock = false, isBorderTop = true }) =>
    getStyle(theme, isBlock, isBorderTop)}
`;

function getStyle(theme: Theme, isBlock: boolean, isBorderTop: boolean) {
  let isBlockStyle;
  let isBorderTopStyle;

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

  return css`
    ${isBlockStyle};
    ${isBorderTopStyle};
  `;
}
