import { Star } from "@phosphor-icons/react";

import { calcStarRatingAvg } from "@/utils/common";

import {
  AnimeCardContainer,
  Image,
  InfoContainer,
  Rating,
  Title,
} from "./style";

export interface AnimeCardProps {
  /** 애니 id */
  id: number;

  /** 썸네일 url */
  thumbnail: string;

  /** 애니 제목 */
  title: string;

  /** 애니 평점 */
  starScoreAvg: number;

  /** 페이지 이동 */
  onClick: (animeId: number, e: React.MouseEvent) => void;
}

export default function AnimeCard({
  id,
  thumbnail,
  title,
  starScoreAvg,
  onClick,
}: AnimeCardProps) {
  return (
    <AnimeCardContainer onClick={(e: React.MouseEvent) => onClick(id, e)}>
      <Image image={thumbnail} />
      <InfoContainer>
        <Title>{title}</Title>
        <Rating>
          <Star weight="fill" />
          <span>
            {starScoreAvg === 0 ? "평가 전" : calcStarRatingAvg(starScoreAvg)}
          </span>
        </Rating>
      </InfoContainer>
    </AnimeCardContainer>
  );
}
