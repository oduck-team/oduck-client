import { ThemeProvider, Global, css } from "@emotion/react";
import { IconoirProvider } from "iconoir-react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { AuthProvider } from "./contexts";
import router from "./routes";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <IconoirProvider
          iconProps={{
            strokeWidth: 1.5,
          }}
        >
          <Global
            styles={css`
              body {
                color: ${theme.colors.neutral["90"]};
              }
            `}
          />
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </IconoirProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
