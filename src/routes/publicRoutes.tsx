import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import Layout from "@/components/Layout";
import Home from "@/features/common/routes/Home";
import ProfileEdit from "@/features/users/routes/Edit";

const Login = lazy(() => import("@/features/auth/routes/Login"));
const Callback = lazy(() => import("@/features/auth/routes/Callback"));
const AnimeList = lazy(() => import("@/features/animes/routes/List"));
const AnimeDetail = lazy(() => import("@/features/animes/routes/Detail"));
const Search = lazy(() => import("@/features/common/routes/Search"));
const HelpDesk = lazy(() => import("@/features/common/routes/HelpDesk"));
const EmailTerms = lazy(() => import("@/features/common/routes/Terms"));
const NoticeList = lazy(() => import("@/features/notices/routes/List"));
const Profile = lazy(() => import("@/features/users/routes/Profile"));
const NotFound = lazy(() => import("@/features/common/routes/Error/404"));
const ServerError = lazy(() => import("@/features/common/routes/Error/500"));

export const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/auth/callback",
    element: <Callback />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/animes",
        element: <AnimeList />,
      },
      {
        path: "/animes/:id",
        element: <AnimeDetail />,
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
        path: "/terms/email",
        element: <EmailTerms />,
      },
      {
        path: "/notices",
        element: <NoticeList />,
      },
      {
        path: "/users/:id",
        element: <Profile />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/edit",
        element: <ProfileEdit />,
      },
    ],
  },
  {
    path: "/error",
    element: <ServerError />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
