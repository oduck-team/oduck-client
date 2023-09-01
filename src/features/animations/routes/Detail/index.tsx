import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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
    return "로딩중";
  }

  if (animationError) {
    // TODO: 상수 처리
    switch (animationError.message) {
      case "invalid animation id":
        return <Container>404</Container>;
      case "Request failed with status code 500":
        navigate("/error");
        break;
    }
  }

  if (animation)
    return (
      <Container>
        <Hero animation={animation} />
        <SectionDivider />
        <PlotAndInfo />
        <SectionDivider />
        <Ratings />
        <SectionDivider />
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
