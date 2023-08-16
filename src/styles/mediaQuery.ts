export type MediaQuery = typeof mq;

export const breakPoints = {
  xs: 420,
  sm: 576,
  md: 768,
  lg: 900,
  xl: 1200,
} as const;

export const mq = (bp: keyof typeof breakPoints) =>
  `@media (min-width: ${breakPoints[bp]}px)`;
