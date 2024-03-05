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

  /** style: 사용되는 곳에 따라 width를 다르게 설정 */
  display?: "default" | "carousel";
}

export default function AnimeCard({
  id,
  thumbnail,
  title,
  starScoreAvg,
  onClick,
  display = "default",
}: AnimeCardProps) {
  console.log("animCard");
  console.log(title, thumbnail);

  return (
    <AnimeCardContainer
      onClick={(e: React.MouseEvent) => onClick(id, e)}
      display={display}
    >
      <div className="image-container">
        <Image className="image" image={thumbnail || ""} />
      </div>
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
