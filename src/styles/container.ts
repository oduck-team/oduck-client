import { css } from "@emotion/react";

import { breakPoints } from "./mediaQuery";

const maxWidths = Object.entries(breakPoints)
  .map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, value]) => `@media (min-width: ${value}px) {
    max-width: ${value}px;
  }`,
  )
  .join("");

/**
 * 반응형 container 스타일입니다
 * 뷰포트의 너비에 따라 max-width가 변경됩니다
 *
 * @example styled.div`
 *    ${({ theme }) => theme.container}
 * `
 */
export const container = css`
  width: 100%;
  ${maxWidths};
`;
