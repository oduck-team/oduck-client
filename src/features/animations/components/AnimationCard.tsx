import { Star } from "iconoir-react";
import { Link } from "react-router-dom";

import {
  Container,
  Image,
  InfoContainer,
  Rating,
  Title,
} from "./AnimationCard.style";
import { Animation } from "./AnimationCarousel";

export default function AnimationCard({
  ani,
}: {
  ani: Omit<Animation, "review">;
}) {
  return (
    <Container>
      <Link to={`/animations/${ani.id}`}>
        <Image image={ani.image} />
        <InfoContainer>
          <Title>{ani.title}</Title>
          <Rating>
            <Star />
            <span> {ani.rating}</span>
          </Rating>
        </InfoContainer>
      </Link>
    </Container>
  );
}
