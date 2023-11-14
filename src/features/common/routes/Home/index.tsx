import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import Head from "@/components/Head";
import AnimeCarousel, {
  AnimeWithReview,
} from "@/features/animes/components/AnimeCarousel";
import AnimeRanking, {
  Ranking,
} from "@/features/animes/components/AnimeRanking";
import AnimeSlide from "@/features/animes/components/AnimeSlide";
import useAuth from "@/features/auth/hooks/useAuth";

import Discord from "./Discord";
import RecentReview from "./RecentReview";

export default function Home() {
  const carouselAnimes = [
    {
      id: 1,
      title: "주술회전",
      thumbnail: "https://url.kr/lo4miy",
      review: "리뷰1입니다리뷰1입니다리뷰1입니다리뷰1입니다",
    },
    {
      id: 2,
      title:
        "레벨 1이지만 유니크 스킬로 최강이 되었습니다 레벨 1이지만 유니크 스킬로 최강이 되었습니다",
      thumbnail: "https://url.kr/azbxi1",
      review: "리뷰2입니다리뷰2입니다리뷰2입니다리뷰2입니다",
    },
    {
      id: 3,
      title: "제목333",
      thumbnail: "https://url.kr/txfijy",
      review: "리뷰3입니다리뷰3입니다리뷰3입니다리뷰3입니다",
    },
    {
      id: 4,
      title: "제목444",
      thumbnail: "https://url.kr/4gtucf",
      review: "리뷰4입니다리뷰4입니다리뷰4입니다리뷰4입니다",
    },
  ] as AnimeWithReview[];

  const rankingAnimes: Ranking[] = [
    {
      id: "123451",
      title: "봇치더락",
      thumbnail: "https://url.kr/dkt2w7",
      genre: "판타지/액션",
      rank: 1,
      rating: 4.8,
    },
    {
      id: "123452",
      title: "카구야 님은 고백받고 싶어~ 카구야 님은 고백받고 싶어~",
      thumbnail: "https://url.kr/azbxi1",
      genre: "장르2",
      rank: 2,
      rating: 4.5,
    },
    {
      id: "123453",
      title: "주술회전",
      thumbnail: "https://url.kr/ma76s1",
      genre: "장르3",
      rank: 3,
      rating: 4.3,
    },
    {
      id: "123454",
      title: "4등인애니라네요",
      thumbnail: "https://url.kr/txfijy",
      genre: "장르4",
      rank: 4,
      rating: 3.9,
    },
    {
      id: "123455",
      title: "5등애니요",
      thumbnail: "https://url.kr/4gtucf",
      genre: "장르5",
      rank: 5,
      rating: 4.8,
    },
    {
      id: "123456",
      title: "6등애니",
      thumbnail: "https://url.kr/ma76s1",
      genre: "장르6",
      rank: 6,
      rating: 4.5,
    },
    {
      id: "123457",
      title: "7등애니7등애니7등애니7등애니7등애니",
      thumbnail: "https://url.kr/ma76s1",
      genre: "장르7",
      rank: 7,
      rating: 4.3,
    },
    {
      id: "123458",
      title: "8등애니8등애니8등애니",
      thumbnail: "https://url.kr/ma76s1",
      genre: "장르8",
      rank: 8,
      rating: 4.7,
    },
    {
      id: "123459",
      title: "9등애니9등애니9등애니",
      thumbnail: "https://url.kr/ma76s1",
      genre: "장르9",
      rank: 9,
      rating: 3.3,
    },
    {
      id: "123460",
      title: "10등애니라네요",
      thumbnail: "https://url.kr/ma76s1",
      genre: "장르10",
      rank: 10,
      rating: 3.5,
    },
  ];

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
    <>
      <Head />
      <HomeContainer>
        <AnimeCarousel animes={carouselAnimes} />
        <AnimeRanking title="이번주 TOP10" contents={rankingAnimes} />
        <Discord />
        <AnimeSlide title="2023년 3분기 신작" animes={slideAnimes} />
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
    </>
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
