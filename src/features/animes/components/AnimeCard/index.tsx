import { Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

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
  avgScore: number;

  /** UI 사이즈 */
  size?: "md" | "lg";
}

export default function AnimeCard({
  id,
  thumbnail,
  title,
  avgScore,
  size,
}: AnimeCardProps) {
  return (
    <AnimeCardContainer size={size}>
      <Link to={`/animes/${id}`}>
        <Image image={thumbnail} size={size} />
        <InfoContainer size={size}>
          <Title>{title}</Title>
          <Rating>
            <Star weight="fill" />
            <span> {avgScore === 0 ? "평가 전" : avgScore} </span>
          </Rating>
        </InfoContainer>
      </Link>
    </AnimeCardContainer>
  );
}
