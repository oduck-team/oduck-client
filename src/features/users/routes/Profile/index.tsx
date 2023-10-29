import { useQuery, useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ErrorBoundary from "@/components/Error/ErrorBoundary";
import Head from "@/components/Head";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

import AboutMe from "./AboutMe";
import ProfileLoading from "./ProfileLoading";
import { ProfileContainer } from "./style";
import TabMenu from "./TabMenu";

export default function Profile() {
  const { user } = useAuth();
  const params = useParams();
  const { profile } = useApi();
  const { isLoading, data: userProfile } = useQuery(
    ["profile", params.name || user.name],
    () => profile.getProfile(params.name || user.name),
    { enabled: !!params.name || !!user.name },
  );
  const { reset } = useQueryErrorResetBoundary();

  // 내 프로필이면 /profile로 주소 변경
  useEffect(() => {
    if (
      window.location.pathname === "/profile" ||
      typeof history.pushState === "undefined" ||
      !userProfile?.isMine
    )
      return;

    history.pushState(null, "", "/profile");
  }, [userProfile?.isMine]);

  if (isLoading) return <ProfileLoading />;
  return (
    <>
      {userProfile && (
        <>
          <Head
            title={`오덕 | ${
              userProfile.isMine ? "내 프로필" : userProfile.name
            }`}
          />
          <ProfileContainer>
            <AboutMe profile={userProfile} />
            <ErrorBoundary onReset={reset}>
              <TabMenu isMine={userProfile.isMine} />
            </ErrorBoundary>
          </ProfileContainer>
        </>
      )}
    </>
  );
}
