import { Button, CSSVariablesResolver, createTheme } from "@mantine/core";

import { blueGray } from "./colors";

export const theme = createTheme({
  defaultRadius: "md",
  colors: {
    blueGray,
  },
  primaryColor: "blueGray",
  components: {
    Button: Button.extend({
      defaultProps: {
        fw: 400,
      },
    }),
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-color-text": theme.colors.gray["9"],
  },
  light: {
    "--mantine-color-text": theme.colors.gray["9"],
  },
  dark: {
    "--mantine-color-text": theme.colors.dark["0"],
  },
});
