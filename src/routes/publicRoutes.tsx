import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import Layout from "@/components/Layout";
import { HelpDeskProvider } from "@/contexts/HelpDeskContext";
import Home from "@/features/common/routes/Home";

import RouteLayout from "../components/Layout/RouteLayout";

const Login = lazy(() => import("@/features/auth/routes/Login"));
const Callback = lazy(() => import("@/features/auth/routes/Callback"));
const AnimeList = lazy(() => import("@/features/animes/routes/List"));
const AnimeDetail = lazy(() => import("@/features/animes/routes/Detail"));
const Search = lazy(() => import("@/features/animes/routes/Search"));
const HelpDesk = lazy(() => import("@/features/common/routes/HelpDesk"));
const EmailTerms = lazy(() => import("@/features/common/routes/Terms/Email"));
const NoticeList = lazy(() => import("@/features/notices/routes/List"));
const Profile = lazy(() => import("@/features/users/routes/Profile"));
const NotFound = lazy(() => import("@/features/common/routes/Error/404"));

export const publicRoutes: RouteObject[] = [
  {
    element: <RouteLayout />,
    children: [
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
            index: true,
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
            element: <HelpDeskProvider />,
            children: [
              {
                path: "/helpdesk",
                element: <HelpDesk />,
              },
              {
                path: "/terms/email",
                element: <EmailTerms />,
              },
            ],
          },
          {
            path: "/notices",
            element: <NoticeList />,
          },
          {
            path: "/users/:name",
            element: <Profile />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
