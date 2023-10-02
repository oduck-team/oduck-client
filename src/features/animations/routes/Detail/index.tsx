// import { useNavigate } from "react-router-dom";

// import Loader from "@/components/Loader";
import SectionDivider from "@/components/SectionDivider";

// import { useAnimation } from "../../hooks/useAnimation";

import { getAnimeMock } from "../../api/mock";

import Hero from "./Hero";
import PlotAndInfo from "./PlotAndInfo";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import { AnimationDetailContainer } from "./style";

export default function AnimationDetail() {
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

  if (anime)
    return (
      <AnimationDetailContainer>
        <Hero anime={anime} />
        <SectionDivider />

        {/* 줄거리 및 정보 */}
        <PlotAndInfo />
        <SectionDivider />

        {/* 평점 */}
        <Ratings />
        <SectionDivider />

        {/* 리뷰 목록 */}
        <Reviews />
      </AnimationDetailContainer>
    );
}
