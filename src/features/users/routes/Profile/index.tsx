import { useQuery } from "@tanstack/react-query";

import Head from "@/components/Head";
import Loader from "@/components/Loader";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

import AboutMe from "./AboutMe";
import { ProfileContainer } from "./style";
import TabMenu from "./TabMenu";

export default function Profile() {
  const {
    user: { name },
  } = useAuth();
  const { profile } = useApi();
  const {
    isLoading,
    error,
    data: userProfile,
  } = useQuery(["profile", name], () => profile.getProfile(name));
  console.log(userProfile);

  if (isLoading) return <Loader />;
  if (error) return <span>오류발생</span>;
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
            <TabMenu />
          </ProfileContainer>
        </>
      )}
    </>
  );
}
