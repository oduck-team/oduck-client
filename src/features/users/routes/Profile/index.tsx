import AboutMe from "./AboutMe";
import ReviewList from "./ReviewList";
import { Container } from "./style";

export default function Profile() {
  return (
    <Container>
      <AboutMe />
      <ReviewList />
    </Container>
  );
}
