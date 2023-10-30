import { PropsWithChildren, lazy, useEffect } from "react";
import { RouteObject, useNavigate } from "react-router-dom";

import Layout from "@/components/Layout";
import useAuth from "@/features/auth/hooks/useAuth";
import useLocalUser from "@/features/auth/hooks/useLocalUser";

const Profile = lazy(() => import("@/features/users/routes/Profile"));

function PrivateRoute({ children }: PropsWithChildren) {
  const { isLoggedIn, fetchUser } = useAuth();
  const { localUser } = useLocalUser();
  const navigate = useNavigate();

  /**
   * 로컬 스토리지에 유저 정보가 있다면 서버에 유저 정보를 요청합니다
   * 없다면 로그인 페이지로 이동합니다
   */
  useEffect(() => {
    const handleAuth = () => {
      if (!localUser) {
        navigate("/login", { replace: true });
      }

      fetchUser();
    };
    handleAuth();
  }, []);

  if (!isLoggedIn) return null;

  return children;
}

export const privateRoutes: RouteObject[] = [
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
    ],
  },
];
