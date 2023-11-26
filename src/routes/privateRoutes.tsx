import { PropsWithChildren, lazy, useEffect } from "react";
import { RouteObject, useNavigate } from "react-router-dom";

import Layout from "@/components/Layout";
import useAuth from "@/features/auth/hooks/useAuth";

import RouteLayout from "../components/Layout/RouteLayout";

const Profile = lazy(() => import("@/features/users/routes/Profile"));
const ProfileEdit = lazy(() => import("@/features/users/routes/Edit"));

function PrivateRoute({ children }: PropsWithChildren) {
  const { user } = useAuth();
  const navigate = useNavigate();

  /**
   * 유저 정보가 없다면 로그인 페이지로 이동합니다.
   */
  useEffect(() => {
    console.log("PrivateRoute user 정보");
    console.log(user);

    if (!user) {
      console.log("PrivateRoute: 로그인 페이지로 이동");
      navigate("/login", { replace: true });
    }
  }, [navigate, user]);

  return children;
}

export const privateRoutes: RouteObject[] = [
  {
    element: <RouteLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        ),
        children: [
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
    ],
  },
];
