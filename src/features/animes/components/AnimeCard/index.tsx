import { Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import {
  AnimeCardContainer,
  Image,
  InfoContainer,
  Rating,
  Title,
} from "./style";

interface AnimeCardProps {
  anime: Anime;
  size?: "md" | "lg";
}

export default function AnimeCard({ anime, size }: AnimeCardProps) {
  return (
    <AnimeCardContainer size={size}>
      <Link to={`/animes/${anime.id}`}>
        <Image image={anime.thumbnail} size={size} />
        <InfoContainer size={size}>
          <Title>{anime.title}</Title>
          <Rating>
            <Star weight="fill" />
            {/* TODO: 응답타입 불명확함 */}
            {/* <span> {anime.rating}</span> */}
            <span> 5.0 </span>
          </Rating>
        </InfoContainer>
      </Link>
    </AnimeCardContainer>
  );
}
