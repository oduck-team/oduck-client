import { Theme } from "@emotion/react";

import { colors } from "./colors";
import { container } from "./container";
import { mq } from "./mediaQuery";
import { typo } from "./typography";
import { zIndex } from "./z-index";

export const theme: Theme = {
  colors: {
    primary: colors.blue,
    secondary: colors.yellow,
    warn: colors.red,
    neutral: colors.neutral,
  },
  typo,
  zIndex,
  mq,
  container,
};
