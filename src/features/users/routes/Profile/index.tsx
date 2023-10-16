import { useQuery } from "@tanstack/react-query";

import Head from "@/components/Head";
import Loader from "@/components/Loader";
import { useApi } from "@/hooks/useApi";
import useAuth from "@/hooks/useAuth";

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
    data: user,
  } = useQuery(["profile", name], () => profile.getProfile(name));
  console.log(user);

  if (isLoading) return <Loader />;
  if (error) return <span>error</span>;
  return (
    <>
      {/* FIXME: 내 프로필 -> 내 프로필, 다른 사용자 프로필 -> 닉네임*/}
      <Head title="오덕 | OOO" />
      <ProfileContainer>
        <AboutMe />
        <TabMenu />
      </ProfileContainer>
    </>
  );
}
