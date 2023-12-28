import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import ErrorBoundary from "@/components/Error/ErrorBoundary";
import Head from "@/components/Head";
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
  const { reset } = useQueryErrorResetBoundary();

  const {
    starRatingAvg,
    attractionStatics,
    anime,
    isLoading: isAnimeLoading,
  } = useAnime(Number(animeId));

  if (isAnimeLoading) {
    return <Loader />;
  }

  if (anime)
    return (
      <>
        <Head title={`${anime.title} | 오덕`} image={anime.thumbnail} />
        <AnimeDetailContainer>
          {/* TODO: 평점 */}
          <Hero {...anime} starScoreAvg={starRatingAvg} />
          <SectionDivider />
          {/* 줄거리 및 정보 */}
          <PlotAndInfo
            {...anime}
            voiceActors={anime.voiceActors.map((actor) => actor.name)}
          />
          <SectionDivider />
          {/* 평점 */}
          {attractionStatics && (
            <Ratings starScoreAvg={starRatingAvg} statics={attractionStatics} />
          )}
          <SectionDivider />
          {/* 리뷰 목록 */}
          <ErrorBoundary onReset={reset}>
            <Reviews
              animeId={Number(animeId)}
              totalReviewCount={anime.reviewCount}
            />
          </ErrorBoundary>
        </AnimeDetailContainer>
      </>
    );
}
