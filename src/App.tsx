import { IconoirProvider, Check } from "iconoir-react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";

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
        </Routes>
        <Check />
      </IconoirProvider>
    </HelmetProvider>
  );
}
