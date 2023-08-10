import { css } from "@emotion/react";

const BOLD = 700;
const MEDIUM = 500;
const REGULAR = 400;

const LETTER_SPACING = "-0.02em"; // -2%

const generateTypography = (
  size: number,
  weight: number,
  letterSpacing?: string,
) => css`
  font-family: "Spoqa Han Sans Neo", "sans-serif", "system-ui";
  font-style: normal;
  line-height: 150%;
  font-weight: ${weight};
  font-size: ${size}px;
  ${letterSpacing && `letter-spacing: ${letterSpacing};`}
`;

export type Typography = typeof typo;

export const typo = {
  "heading-1": generateTypography(28, BOLD),
  "heading-2": generateTypography(24, BOLD),
  "heading-3": generateTypography(22, BOLD),

  "title-1-b": generateTypography(20, BOLD),
  "title-1-m": generateTypography(20, MEDIUM),
  "title-2-b": generateTypography(18, BOLD),
  "title-2-m": generateTypography(18, MEDIUM),
  "title-3-b": generateTypography(16, BOLD),
  "title-3-m": generateTypography(16, MEDIUM),

  "body-1-m": generateTypography(16, MEDIUM, LETTER_SPACING),
  "body-1-r": generateTypography(16, REGULAR, LETTER_SPACING),
  "body-2-m": generateTypography(14, MEDIUM, LETTER_SPACING),
  "body-2-r": generateTypography(14, REGULAR, LETTER_SPACING),
  "body-3-m": generateTypography(12, MEDIUM, LETTER_SPACING),
  "body-3-r": generateTypography(12, REGULAR, LETTER_SPACING),

  "micro-m": generateTypography(10, MEDIUM, LETTER_SPACING),
  "micro-r": generateTypography(10, REGULAR, LETTER_SPACING),
} as const;
