import { createBrowserRouter } from "react-router-dom";

import { adminRoutes } from "./adminRoutes";
import { privateRoutes } from "./privateRoutes";
import { publicRoutes } from "./publicRoutes";

const router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes,
  ...adminRoutes,
]);

export default router;
