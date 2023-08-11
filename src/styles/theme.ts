import { Theme } from "@emotion/react";

import { colors } from "./colors";
import { typo } from "./typography";

export const theme: Theme = {
  colors: {
    primary: colors.blue,
    secondary: colors.yellow,
    warn: colors.red,
    neutral: colors.neutral,
  },
  typo,
};
