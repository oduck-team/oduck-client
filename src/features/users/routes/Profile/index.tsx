import { useQuery, useQueryErrorResetBoundary } from "@tanstack/react-query";

import ErrorBoundary from "@/components/Error/ErrorBoundary";
import Head from "@/components/Head";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

import AboutMe from "./AboutMe";
import ProfileLoading from "./ProfileLoading";
import { ProfileContainer } from "./style";
import TabMenu from "./TabMenu";

export default function Profile() {
  const {
    user: { name },
  } = useAuth();
  const { profile } = useApi();
  const { isLoading, data: userProfile } = useQuery(["profile", name], () =>
    profile.getProfile(name),
  );
  const { reset } = useQueryErrorResetBoundary();

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
