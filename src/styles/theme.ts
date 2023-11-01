import { Theme } from "@emotion/react";

import { colors } from "./colors";
import { container } from "./container";
import { mq } from "./mediaQuery";
import { typo } from "./typography";
import { zIndex } from "./zIndex";

export const theme: Theme = {
  colors: {
    primary: colors.blue,
    secondary: colors.yellow,
    warn: colors.red,
    neutral: colors.neutral,
    green: colors.green,
  },
  typo,
  zIndex,
  mq,
  container,
  maxWidth: "600px", // pc 작업 이전 임시 view max-width
};
