import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";

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

  if (!user.name && !params.name) return <Navigate to="/login" replace />;
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
            <TabMenu isMine={userProfile.isMine} />
          </ProfileContainer>
        </>
      )}
    </>
  );
}
