import AnimeCard from "../AnimeCard";

import { CardSlider, AnimeSlideContainer } from "./style";

interface AnimeSlideProps {
  title: string;
  animes: Anime[];
}

export default function AnimeSlide({ title, animes }: AnimeSlideProps) {
  return (
    <AnimeSlideContainer>
      <h1>{title}</h1>
      <CardSlider>
        {animes.map((anime, i) => (
          <AnimeCard anime={anime} key={i} />
        ))}
      </CardSlider>
    </AnimeSlideContainer>
  );
}
