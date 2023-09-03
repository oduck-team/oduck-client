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
  size,
}: {
  ani: Omit<Animation, "review">;
  size?: "md" | "lg";
}) {
  return (
    <Container size={size}>
      <Link to={`/animations/${ani.id}`}>
        <Image image={ani.image} size={size} />
        <InfoContainer size={size}>
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
