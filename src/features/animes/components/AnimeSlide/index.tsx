import Slider from "react-slick";

import { RowCarousel } from "@/libs/carousel";

import { AnimeSlideResponse } from "../../api/AnimeApi";
import AnimeCard from "../AnimeCard";

import { AnimeSlideContainer } from "./style";

interface AnimeSlideProps {
  title: string;
  animes: AnimeSlideResponse[];
}

export default function AnimeSlide({ title, animes }: AnimeSlideProps) {
  return (
    <AnimeSlideContainer>
      <h1>{title}</h1>
      <Slider {...RowCarousel}>
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            thumbnail={anime.thumbnail}
            title={anime.title}
            starScoreAvg={anime.avgScore}
          />
        ))}
        {/* 캐러셀 레이아웃이 어색해지는 현상 수정 (div 추가)  */}
        <div />
      </Slider>
    </AnimeSlideContainer>
  );
}
