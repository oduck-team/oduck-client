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

export const container = css`
  width: 100%;
  ${maxWidths};
`;
