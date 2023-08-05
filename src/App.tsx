import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./routes/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}
