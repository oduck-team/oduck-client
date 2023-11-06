// import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import Loader from "@/components/Loader";
import SectionDivider from "@/components/SectionDivider";
import NotFound from "@/features/common/routes/Error/404";
import { ApiError } from "@/libs/error";

import useAnime from "../../hooks/useAnime";

import Hero from "./Hero";
import PlotAndInfo from "./PlotAndInfo";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import { AnimeDetailContainer } from "./style";

export default function AnimeDetail() {
  const { id: animeId } = useParams();

  const {
    data: anime,
    isLoading: isAnimeLoading,
    error: animeError,
  } = useAnime(Number(animeId));
  // const navigate = useNavigate();

  if (isAnimeLoading) {
    return <Loader />;
  }

  if (animeError && animeError instanceof ApiError) {
    switch (animeError.status) {
      case 404:
        return <NotFound />;
    }
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
