import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import ErrorBoundary from "@/components/Error/ErrorBoundary";
import Head from "@/components/Head";
import AnimeRanking from "@/features/animes/components/AnimeRanking";
import useAuth from "@/features/auth/hooks/useAuth";

import Discord from "./Discord";
import NewestAnimes from "./NewestAnimes";
import RecentReview from "./RecentReview";
import RecentReviewImageCard from "./RecentReviewImageCard";
import RecommendAnimes from "./RecommendAnimes";
import { Bottom, HomeContainer } from "./style";

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { reset } = useQueryErrorResetBoundary();
  const handlerReviewButtonClick = () => {
    if (user) navigate("/search");
    else navigate("/login");
  };

  return (
    <>
      <Head />
      <HomeContainer>
        <ErrorBoundary onReset={reset}>
          <RecentReviewImageCard />
        </ErrorBoundary>

        <ErrorBoundary onReset={reset}>
          <NewestAnimes />
        </ErrorBoundary>

        <Discord />
        <ErrorBoundary onReset={reset}>
          <AnimeRanking title="이번주 TOP10" />
        </ErrorBoundary>

        <ErrorBoundary onReset={reset}>
          <RecentReview />
        </ErrorBoundary>

        {/* TODO: 추천 애니 요청 방법 정하기 */}
        <ErrorBoundary onReset={reset}>
          <RecommendAnimes title="덕후들의 눈물샘을 터뜨린" />
        </ErrorBoundary>

        <ErrorBoundary onReset={reset}>
          <RecommendAnimes title="이불밖을 못 나오게 하는" />
        </ErrorBoundary>

        <Bottom>
          <span>감명 깊게 본 애니를 다른 회원님들과 공유해보세요!</span>
          <Button name="리뷰" size="lg" onClick={handlerReviewButtonClick}>
            한줄리뷰 남기러가기
          </Button>
        </Bottom>
      </HomeContainer>
    </>
  );
}
