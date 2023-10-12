import { ThemeProvider, Global, css } from "@emotion/react";
import { IconContext } from "@phosphor-icons/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import DeferredComponent from "./components/DeferredComponent";
import Loader from "./components/Loader";
import { AuthProvider } from "./contexts/AuthContext";
import { SnackBarContextProvider } from "./contexts/SnackBarContext";
import { queryClient } from "./libs/react-query";
import router from "./routes";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
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
      </QueryClientProvider>
    </HelmetProvider>
  );
}
