import { Star } from "@phosphor-icons/react";

import {
  AnimeCardContainer,
  Image,
  InfoContainer,
  Rating,
  Title,
} from "./AnimePreviewCard.style";

interface AnimeCardProps {
  title?: string;
  thumbnail?: string;
  size?: "md" | "lg";
}

export default function AnimePreviewCard({
  title = "제목을 입력하세요",
  thumbnail,
  size,
}: AnimeCardProps) {
  return (
    <AnimeCardContainer size={size}>
      <Image image={thumbnail ? thumbnail : "/logo/logo.png"} size={size} />
      <InfoContainer size={size}>
        <Title>{title.length === 0 ? "제목을 입력하세요" : title} </Title>
        <Rating>
          <Star weight="fill" />
          {/* TODO: 응답타입 불명확함 */}
          {/* <span> {anime.rating}</span> */}
          <span> 5.0 </span>
        </Rating>
      </InfoContainer>
    </AnimeCardContainer>
  );
}
