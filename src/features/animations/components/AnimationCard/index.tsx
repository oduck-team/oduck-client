import { Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import { Animation } from "../AnimationCarousel";

import {
  AnimationCardContainer,
  Image,
  InfoContainer,
  Rating,
  Title,
} from "./style";

export default function AnimationCard({
  ani,
  size,
}: {
  ani: Omit<Animation, "review">;
  size?: "md" | "lg";
}) {
  return (
    <AnimationCardContainer size={size}>
      <Link to={`/animations/${ani.id}`}>
        <Image image={ani.image} size={size} />
        <InfoContainer size={size}>
          <Title>{ani.title}</Title>
          <Rating>
            <Star weight="fill" />
            <span> {ani.rating}</span>
          </Rating>
        </InfoContainer>
      </Link>
    </AnimationCardContainer>
  );
}
