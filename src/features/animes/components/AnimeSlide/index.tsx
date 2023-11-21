import { useState } from "react";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  const [dragging, setDragging] = useState(false);
  const handleClick = (animesId: number, e: React.MouseEvent) => {
    if (dragging) {
      e.stopPropagation();
      return;
    }
    navigate(`/animes/${animesId}`);
  };

  return (
    <AnimeSlideContainer>
      <h1>{title}</h1>
      <Slider
        {...RowCarousel}
        beforeChange={() => setDragging(true)}
        afterChange={() => setDragging(false)}
      >
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            thumbnail={anime.thumbnail}
            title={anime.title}
            starScoreAvg={anime.avgScore}
            onClick={handleClick}
          />
        ))}
        {/* 캐러셀 레이아웃이 어색해지는 현상 수정 (div 추가)  */}
        <div />
      </Slider>
    </AnimeSlideContainer>
  );
}
