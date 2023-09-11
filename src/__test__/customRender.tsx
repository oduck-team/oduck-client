import { ThemeProvider } from "@emotion/react";
import { RenderOptions, render } from "@testing-library/react";
import { PropsWithChildren } from "react";

import { theme } from "@/styles/theme";

export default function customRender(
  ui: React.ReactElement,
  options?: RenderOptions,
) {
  return render(ui, { wrapper: RenderWithProviders, ...options });
}

function RenderWithProviders({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
