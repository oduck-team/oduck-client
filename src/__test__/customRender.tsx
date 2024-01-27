import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, render } from "@testing-library/react";
import { PropsWithChildren } from "react";

import { OduckApiContext } from "@/contexts/OduckApiContext";
import { theme } from "@/styles/theme";

export default function customRender(
  ui: React.ReactElement,
  options?: RenderOptions,
) {
  return render(ui, { wrapper: RenderWithProviders, ...options });
}

export function RenderWithProviders(
  { children }: PropsWithChildren,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  oduck: any,
) {
  const testClient = createTestQueryClient();
  return (
    <OduckApiContext.Provider value={oduck}>
      <QueryClientProvider client={testClient}>
        <ThemeProvider theme={theme}>
          {children}
          {/* </IconContext.Provider> */}
        </ThemeProvider>
      </QueryClientProvider>
    </OduckApiContext.Provider>
  );
}

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });
}
