import { PropsWithChildren, lazy, useEffect } from "react";
import { RouteObject, useNavigate } from "react-router-dom";

import Layout from "@/components/Layout";
import useAuth from "@/features/auth/hooks/useAuth";
import useRedirect from "@/hooks/useRedirect";

import RouteLayout from "../components/Layout/RouteLayout";

const Profile = lazy(() => import("@/features/users/routes/Profile"));
const ProfileEdit = lazy(() => import("@/features/users/routes/Edit"));

function PrivateRoute({ children }: PropsWithChildren) {
  const { user, fetchUser } = useAuth();
  const navigate = useNavigate();
  const { redirectUrl, handleRedirect } = useRedirect();

  /**
   * 유저 정보가 없다면 로그인 페이지로 이동합니다.
   */
  useEffect(() => {
    console.log("PrivateRoute useEffect");
    console.log(user);

    if (!user) {
      if (redirectUrl) {
        const handleFetchUser = async () => {
          console.log("PrivateRoute redirect handleFetchUser");
          await fetchUser();
          handleRedirect();
        };

        handleFetchUser();
      }
      console.log("PrivateRoute user가 없어서 로그인 페이지로 이동");
      navigate("/login", { replace: true });
    }
  }, [navigate, user, redirectUrl]);

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
