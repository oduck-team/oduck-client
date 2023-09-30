import AboutMe from "./AboutMe";
import ReviewList from "./ReviewList";
import { ProfileContainer } from "./style";

export default function Profile() {
  return (
    <ProfileContainer>
      <AboutMe />
      <ReviewList />
    </ProfileContainer>
  );
}
