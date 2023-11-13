import { AnimeSlideResponse } from "../../api/AnimeApi";
import AnimeCard from "../AnimeCard";

import { CardSlider, AnimeSlideContainer } from "./style";

interface AnimeSlideProps {
  title: string;
  animes: AnimeSlideResponse[];
}

export default function AnimeSlide({ title, animes }: AnimeSlideProps) {
  return (
    <AnimeSlideContainer>
      <h1>{title}</h1>
      <CardSlider>
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            thumbnail={anime.thumbnail}
            title={anime.title}
            starScoreAvg={anime.avgScore}
          />
        ))}
      </CardSlider>
    </AnimeSlideContainer>
  );
}
