import { Star } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

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
}

export default function AnimeCard({
  id,
  thumbnail,
  title,
  starScoreAvg,
}: AnimeCardProps) {
  const navigate = useNavigate();
  return (
    <AnimeCardContainer onClick={() => navigate(`/animes/${id}`)}>
      <Image image={thumbnail} />
      <InfoContainer>
        <Title>{title}</Title>
        <Rating>
          <Star weight="fill" />
          <span> {starScoreAvg === 0 ? "평가 전" : starScoreAvg / 2} </span>
        </Rating>
      </InfoContainer>
    </AnimeCardContainer>
  );
}
