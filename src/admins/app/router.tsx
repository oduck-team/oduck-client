import { PropsWithChildren, lazy } from "react";
import { RouteObject } from "react-router-dom";

import ErrorBoundaryLayout from "@/components/Layout/ErrorBoundaryLayout";
import useAuth from "@/features/auth/hooks/useAuth";
import NotFound from "@/features/common/routes/Error/404";

const AdminProviders = lazy(() => import("./AdminProviders"));
const AdminLayout = lazy(() => import("../components/Layouts/AdminLayout"));
const AdminLoginPage = lazy(() => import("./login/AdminLogin"));
const AdminHomePage = lazy(() => import("./AdminHome"));
const AdminAnimeListPage = lazy(() => import("./animes/AdminAnimeList"));
const AdminCreateAnimePage = lazy(
  () => import("./animes/new/AdminCreateAnime"),
);

function AdminProtectedRoute({ children }: PropsWithChildren) {
  const { user } = useAuth();

  if (user?.role === "ADMIN") {
    return children;
  }

  return <NotFound />;
}

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
            element: (
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            ),
            children: [
              {
                path: "",
                element: <AdminHomePage />,
              },
              {
                path: "animes",
                element: <AdminAnimeListPage />,
              },
              {
                path: "animes/new",
                element: <AdminCreateAnimePage />,
              },
            ],
          },
        ],
      },
    ],
  },
];
