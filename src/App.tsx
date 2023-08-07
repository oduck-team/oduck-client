import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";

export default function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}
