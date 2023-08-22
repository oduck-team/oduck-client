import { ThemeProvider } from "@emotion/react";
import { IconoirProvider } from "iconoir-react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

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
          <RouterProvider router={router} />
        </IconoirProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
