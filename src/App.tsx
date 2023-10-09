import { ThemeProvider, Global, css } from "@emotion/react";
import { IconContext } from "@phosphor-icons/react";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import DeferredComponent from "./components/DeferredComponent";
import Loader from "./components/Loader";
import { AuthProvider } from "./contexts/AuthContext";
import { SnackBarContextProvider } from "./contexts/SnackBarContext";
import router from "./routes";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <IconContext.Provider
          value={{
            size: 24,
          }}
        >
          <SnackBarContextProvider>
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
          </SnackBarContextProvider>
        </IconContext.Provider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
