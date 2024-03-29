import { createBrowserRouter } from "react-router-dom";

import { adminRoutes } from "@/admins/app/router";

import { privateRoutes } from "./privateRoutes";
import { publicRoutes } from "./publicRoutes";

const router = createBrowserRouter([
  ...adminRoutes,
  ...privateRoutes,
  ...publicRoutes,
]);

export default router;
