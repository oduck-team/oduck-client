import { PropsWithChildren, lazy, useEffect } from "react";
import { RouteObject, useNavigate } from "react-router-dom";

import Layout from "@/components/Layout";
import useAuth from "@/features/auth/hooks/useAuth";
import useAutoLogin from "@/features/auth/hooks/useAutoLogin";

import RouteLayout from "../components/Layout/RouteLayout";

const Profile = lazy(() => import("@/features/users/routes/Profile"));
const ProfileEdit = lazy(() => import("@/features/users/routes/Edit"));

function PrivateRoute({ children }: PropsWithChildren) {
  const { user, fetchUser } = useAuth();
  const navigate = useNavigate();
  const { isAutoLogin } = useAutoLogin();

  /**
   * 유저 정보가 없다면 로그인 페이지로 이동합니다.
   */
  useEffect(() => {
    if (!user) {
      // 로그인 상태에서 새로고침 시, 로그인 페이지로 이동되는 오류 대응
      // AutoLogin이 설정되어 있으면 유저정보를 새로 요청
      if (isAutoLogin) fetchUser();
      else navigate("/login", { replace: true });
    }
  }, [navigate, user, isAutoLogin]);

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
