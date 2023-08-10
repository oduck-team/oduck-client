import { ThemeProvider } from "@emotion/react";
import { IconoirProvider } from "iconoir-react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "./features/admin/components/Layout";
import Dashboard from "./features/admin/routes/Dashboard";
import Home from "./routes/Home";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <IconoirProvider
          iconProps={{
            strokeWidth: 1.2,
          }}
        >
          <Routes>
            <Route path="/">
              <Route path="" element={<Home />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="" element={<Dashboard />} />
            </Route>
          </Routes>
        </IconoirProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
