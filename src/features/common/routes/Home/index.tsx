import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import AnimeCarousel from "@/features/animes/components/AnimeCarousel";
import AnimeRanking from "@/features/animes/components/AnimeRanking";
import AnimeSlide from "@/features/animes/components/AnimeSlide";
import useAuth from "@/features/auth/hooks/useAuth";

import Discord from "./Discord";
import NewestAnimes from "./NewestAnimes";
import RecentReview from "./RecentReview";

export default function Home() {
  const cardAnime = {
    id: 1,
    title: "주술회전",
    thumbnail: "https://url.kr/lo4miy",
    starScoreAvg: 5.0,
  };

  const cardAnime2 = {
    id: 2,
    title:
      "레벨 1이지만 유니크 스킬로 최강이 되었습니다 레벨 1이지만 유니크 스킬로 최강이 되었습니다",
    thumbnail: "https://url.kr/azbxi1",
    starScoreAvg: 5.0,
  };

  const slideAnimes = [
    cardAnime,
    cardAnime2,
    cardAnime,
    cardAnime2,
    cardAnime,
    cardAnime2,
    cardAnime,
    cardAnime2,
    cardAnime,
    cardAnime2,
    cardAnime,
    cardAnime2,
  ];

  const { user } = useAuth();
  const navigate = useNavigate();

  const handlerReviewButtonClick = () => {
    if (user) navigate("/search");
    else navigate("/login");
  };

  return (
    <HomeContainer>
      <AnimeCarousel />
      <AnimeRanking title="이번주 TOP10" />
      <Discord />
      <NewestAnimes />
      <RecentReview />
      <AnimeSlide title="덕후들의 눈물샘을 터뜨린" animes={slideAnimes} />
      <AnimeSlide title="이불밖을 못 나오게 하는" animes={slideAnimes} />
      <Bottom>
        <span>감명 깊게 본 애니를 다른 회원님들과 공유해보세요!</span>
        <Button name="리뷰" size="lg" onClick={handlerReviewButtonClick}>
          한줄리뷰 남기러가기
        </Button>
      </Bottom>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 66px;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px 28px;

  & > span {
    ${({ theme }) => theme.typo["body-2-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["60"]};
    text-align: center;
  }
`;
