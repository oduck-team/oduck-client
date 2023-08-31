import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { StrictPropsWithChildren } from "@/types";

const Layout = lazy(() => import("@/features/admin/components/Layout"));
const Dashboard = lazy(
  () => import("@/features/admin/common/routes/Dashboard"),
);
const AnimationList = lazy(
  () => import("@/features/admin/animations/routes/List"),
);
const AddAnimation = lazy(
  () => import("@/features/admin/animations/routes/Add"),
);

function AdminRoute({ children }: StrictPropsWithChildren) {
  // TODO: ADMIN ROLE 확인
  return children;
}

export const adminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <Layout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "animations",
        element: <AnimationList />,
      },
      {
        path: "animations/new",
        element: <AddAnimation />,
      },
    ],
  },
];
