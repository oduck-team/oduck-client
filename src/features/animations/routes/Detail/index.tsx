import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Loader from "@/components/Loader";
import SectionDivider from "@/components/SectionDivider";

import { useAnimation } from "../../hooks/useAnimation";

import Hero from "./Hero";
import PlotAndInfo from "./PlotAndInfo";
import Ratings from "./Ratings";
import Reviews from "./Reviews";

export default function AnimationDetail() {
  const { animation, isAnimationLoading, animationError } = useAnimation();
  const navigate = useNavigate();

  if (isAnimationLoading) {
    return <Loader />;
  }

  if (animationError) {
    // TODO: 상수 처리
    switch (animationError.message) {
      case "Not Found":
        return <Container>404</Container>;
      case "Internal Server Error":
        navigate("/error", { replace: true });
        return;
    }
  }

  if (animation)
    return (
      <Container>
        <Hero animation={animation} />
        <SectionDivider />

        {/* 줄거리 및 정보 */}
        <PlotAndInfo animation={animation} />
        <SectionDivider />

        {/* 평점 */}
        <Ratings />
        <SectionDivider />

        {/* 리뷰 목록 */}
        <Reviews />
      </Container>
    );
}

const Container = styled.main`
  height: 100%;
`;

export const Section = styled.section`
  padding: 16px;

  & > h1 {
    ${({ theme }) => theme.typo["title-3-m"]}
    ${({ theme }) => theme.mq("md")} {
      ${({ theme }) => theme.typo["title-2-m"]}
    }
  }
`;
