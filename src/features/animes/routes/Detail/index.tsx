import { useParams } from "react-router-dom";

import Loader from "@/components/Loader";
import SectionDivider from "@/components/SectionDivider";

import useAnime from "../../hooks/useAnime";

import Hero from "./Hero";
import PlotAndInfo from "./PlotAndInfo";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import { AnimeDetailContainer } from "./style";

export default function AnimeDetail() {
  const { id: animeId } = useParams();

  const { data: anime, isLoading: isAnimeLoading } = useAnime(Number(animeId));

  if (isAnimeLoading) {
    return <Loader />;
  }
  if (anime)
    return (
      <AnimeDetailContainer>
        <Hero anime={anime} />
        <SectionDivider />

        {/* 줄거리 및 정보 */}
        <PlotAndInfo summary={anime.summary} />
        <SectionDivider />

        {/* 평점 */}
        <Ratings />
        <SectionDivider />

        {/* 리뷰 목록 */}
        <Reviews />
      </AnimeDetailContainer>
    );
}
