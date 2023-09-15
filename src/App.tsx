import { ThemeProvider, Global, css } from "@emotion/react";
import { IconoirProvider } from "iconoir-react";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import DeferredComponent from "./components/DeferredComponent";
import Loader from "./components/Loader";
import { AuthProvider } from "./contexts/AuthContext";
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
            <Suspense
              fallback={
                <DeferredComponent>
                  <Loader />
                </DeferredComponent>
              }
            >
              <RouterProvider router={router} />
            </Suspense>
          </AuthProvider>
        </IconoirProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
