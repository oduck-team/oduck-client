import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

import { Border, ReviewCardProps } from ".";

export const ReviewCardContainer = styled.article<
  Pick<ReviewCardProps, "isBlock" | "border"> & { cursorPointer: boolean }
>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[10]};
  transition: background-color ease 0.1s;

  @media (hover: hover) and (pointer: fine) {
    &:hover img {
      transform: scale(1.2);
    }
  }

  ${({ theme, isBlock = false, border = "bottom", cursorPointer }) =>
    getStyle(theme, isBlock, border, cursorPointer)}
`;

function getStyle(
  theme: Theme,
  isBlock: boolean,
  border: Border,
  cursorPointer: boolean,
) {
  let isBlockStyle;
  let borderStyle;
  let cursorStyle;

  if (isBlock) {
    isBlockStyle = `
      margin: 0 -16px;
      padding: 16px 16px 14px;
    `;
  } else {
    isBlockStyle = `
      padding: 16px 0 14px;
    `;
  }

  if (border === "top") {
    borderStyle = `
      border-top: 1px solid ${theme.colors.neutral[10]};
    `;
  } else if (border === "none") {
    borderStyle = `
      border: none;
    `;
  }

  if (cursorPointer) {
    cursorStyle = `
      cursor: pointer;
    `;
  }

  return css`
    ${isBlockStyle};
    ${borderStyle};
    ${cursorStyle}
  `;
}
