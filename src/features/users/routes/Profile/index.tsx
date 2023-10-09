import AboutMe from "./AboutMe";
import { ProfileContainer } from "./style";
import TabMenu from "./TabMenu";

export default function Profile() {
  return (
    <ProfileContainer>
      <AboutMe />
      <TabMenu />
    </ProfileContainer>
  );
}
