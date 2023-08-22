import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import Layout from "@/components/Layout";
import Login from "@/features/auth/routes/Login";
import Home from "@/features/common/routes/Home";

const AnimationList = lazy(() => import("@/features/animations/routes/List"));
const AnimationDetail = lazy(
  () => import("@/features/animations/routes/Detail"),
);
const Search = lazy(() => import("@/features/common/routes/Search"));
const HelpDesk = lazy(() => import("@/features/common/routes/HelpDesk"));
const Profile = lazy(() => import("@/features/users/routes/Profile"));
const NotFound = lazy(() => import("@/features/common/routes/404"));

export const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/animations",
        element: <AnimationList />,
      },
      {
        path: "/animations/:id",
        element: <AnimationDetail />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/helpdesk",
        element: <HelpDesk />,
      },
      {
        path: "/users/:id",
        element: <Profile />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
