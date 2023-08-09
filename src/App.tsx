import { IconoirProvider } from "iconoir-react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "./features/admin/components/Layout";
import Dashboard from "./features/admin/routes/Dashboard";
import Home from "./routes/Home";

export default function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}
