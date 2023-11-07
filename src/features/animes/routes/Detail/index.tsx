// import { useNavigate } from "react-router-dom";

// import Loader from "@/components/Loader";
// import { useAnimation } from "../../hooks/useAnimation";

import Loader from "@/components/Loader";
import SectionDivider from "@/components/SectionDivider";
import useGetAnimeReviews from "@/features/reviews/hook/useGetAnimeReviews";

import { getAnimeMock } from "../../api/mock";

import Hero from "./Hero";
import PlotAndInfo from "./PlotAndInfo";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import { AnimeDetailContainer } from "./style";

export default function AnimeDetail() {
  // const { animation, isAnimationLoading, animationError } = useAnimation();
  // const navigate = useNavigate();

  // if (isAnimationLoading) {
  //   return <Loader />;
  // }

  // if (animationError) {
  //   // TODO: 상수 처리
  //   switch (animationError.message) {
  //     case "Not Found":
  //       return <AnimationDetailContainer>404</AnimationDetailContainer>;
  //     case "Internal Server Error":
  //       navigate("/error", { replace: true });
  //       return;
  //   }
  // }
  const anime = getAnimeMock();
  const {
    reviews,
    isLoading,
    targetRef,
    SORT_OPTION,
    selectedSortOption,
    handleChipClick,
  } = useGetAnimeReviews(anime.id);

  if (anime)
    return (
      <AnimeDetailContainer>
        <Hero anime={anime} />
        <SectionDivider />

        {/* 줄거리 및 정보 */}
        <PlotAndInfo />
        <SectionDivider />

        {/* 평점 */}
        <Ratings />
        <SectionDivider />

        {/* 리뷰 목록 */}
        <Reviews
          reviews={reviews?.pages ?? []}
          totalReviewCount={anime.reviewCount}
          sortOptions={SORT_OPTION}
          selectedOption={selectedSortOption}
          handleChipClick={handleChipClick}
        />
        <div ref={targetRef}></div>
        {isLoading && <Loader display="oduck" />}
      </AnimeDetailContainer>
    );
}
