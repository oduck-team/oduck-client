import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Head from "@/components/Head";
import AnimeMainCarousel from "@/features/animes/components/AnimeMainCarousel";
import AnimeRanking from "@/features/animes/components/AnimeRanking";
import useAuth from "@/features/auth/hooks/useAuth";

import Discord from "./Discord";
import NewestAnimes from "./NewestAnimes";
import RecentReview from "./RecentReview";
import RecommendAnimes from "./RecommendAnimes";
import { Bottom, HomeContainer } from "./style";

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handlerReviewButtonClick = () => {
    if (user) navigate("/search");
    else navigate("/login");
  };

  return (
    <>
      <Head />
      <HomeContainer>
        <AnimeMainCarousel />
        <AnimeRanking title="이번주 TOP10" />
        <Discord />
        <NewestAnimes />
        <RecentReview />
        {/* TODO: 추천 애니 요청 방법 정하기 */}
        <RecommendAnimes title="덕후들의 눈물샘을 터뜨린" />
        <RecommendAnimes title="이불밖을 못 나오게 하는" />
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
