import { PropsWithChildren, lazy, useEffect } from "react";
import { RouteObject, useNavigate } from "react-router-dom";

import Layout from "@/components/Layout";
import useAuth from "@/features/auth/hooks/useAuth";
import useAutoLogin from "@/features/auth/hooks/useAutoLogin";

import RouteLayout from "../components/Layout/RouteLayout";

const Profile = lazy(() => import("@/features/users/routes/Profile"));
const ProfileEdit = lazy(() => import("@/features/users/routes/Edit"));

function PrivateRoute({ children }: PropsWithChildren) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { isAutoLogin } = useAutoLogin();

  /**
   * 유저 정보가 없다면 로그인 페이지로 이동합니다.
   */
  useEffect(() => {
    console.log("PrivateRoute useEffect");
    console.log(user);

    if (!user) {
      if (isAutoLogin) {
        console.log("유저는 자동로그인은 설정되어있음");
        // const handleFetchUser = async () => {
        //   console.log("PrivateRoute handleFetchUser");
        //   await fetchUser();
        // };

        // handleFetchUser();
        return;
      }

      console.log("PrivateRoute user가 없어서 로그인 페이지로 이동");
      navigate("/login", { replace: true });
    }
  }, [navigate, user, isAutoLogin]);

  console.log("children 렌더링");

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
