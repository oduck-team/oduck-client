import Head from "@/components/Head";

import AboutMe from "./AboutMe";
import { ProfileContainer } from "./style";
import TabMenu from "./TabMenu";

export default function Profile() {
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
