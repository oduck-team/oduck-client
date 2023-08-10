import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./routes/Home";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "./assets/theme";
import GlobalStyle from './assets/GlobalStyle'
import Style from "./routes/Style";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="/style" element={<Style />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
