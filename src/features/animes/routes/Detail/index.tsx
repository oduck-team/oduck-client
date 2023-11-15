import { useParams } from "react-router-dom";

import Head from "@/components/Head";
import Loader from "@/components/Loader";
import SectionDivider from "@/components/SectionDivider";
import useGetAnimeReviews from "@/features/reviews/hook/useGetAnimeReviews";

import useAnime from "../../hooks/useAnime";

import Hero from "./Hero";
import PlotAndInfo from "./PlotAndInfo";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import { AnimeDetailContainer } from "./style";

export default function AnimeDetail() {
  const { id: animeId } = useParams();

  const { data: anime, isLoading: isAnimeLoading } = useAnime(Number(animeId));

  const {
    reviews,
    isLoading,
    targetRef,
    SORT_OPTION,
    selectedSortOption,
    handleChipClick,
  } = useGetAnimeReviews(Number(animeId));

  if (isAnimeLoading) {
    return <Loader />;
  }

  if (anime)
    return (
      <>
        <Head title={`${anime.title} | 오덕`} image={anime.thumbnail} />
        <AnimeDetailContainer>
          {/* TODO: 평점 */}
          <Hero {...anime} starScoreAvg={10} />
          <SectionDivider />

          {/* 줄거리 및 정보 */}
          <PlotAndInfo
            {...anime}
            voiceActors={anime.voiceActors.map((actor) => actor.name)}
          />
          <SectionDivider />

          {/* 평점 */}
          <Ratings />
          <SectionDivider />

          {/* 리뷰 목록 */}
          <Reviews
            reviews={reviews?.pages ?? []}
            isLoading={isLoading}
            totalReviewCount={anime.reviewCount}
            sortOptions={SORT_OPTION}
            selectedOption={selectedSortOption}
            handleChipClick={handleChipClick}
          />
          <div ref={targetRef}></div>
          {isLoading && <Loader display="oduck" />}
        </AnimeDetailContainer>
      </>
    );
}
