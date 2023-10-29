import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import ErrorBoundaryLayout from "@/routes/ErrorBoundaryLayout";

const AdminProviders = lazy(() => import("./AdminProviders"));
const AdminLayout = lazy(() => import("../components/Layouts/AdminLayout"));
const AdminLoginPage = lazy(() => import("./login/AdminLogin"));
const AdminHomePage = lazy(() => import("./AdminHome"));

export const adminRoutes: RouteObject[] = [
  {
    path: "/dash",
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: "",
        element: <AdminProviders />,
        children: [
          {
            path: "login",
            element: <AdminLoginPage />,
          },
          {
            path: "",
            element: <AdminLayout />,
            children: [
              {
                path: "",
                element: <AdminHomePage />,
              },
            ],
          },
        ],
      },
    ],
  },
];
