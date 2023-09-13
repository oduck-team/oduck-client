import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import AnimationCarousel, {
  Animation,
} from "@/features/animations/components/AnimationCarousel";
import AnimationRanking, {
  IRanking,
} from "@/features/animations/components/AnimationRanking";
import AnimationSlide from "@/features/animations/components/AnimationSlide";
import useAuth from "@/hooks/useAuth";

import Discord from "./Discord";
import NameModal from "./NameModal";
import RecentReview from "./RecentReview";

export default function Home() {
  const CarouselAni: Animation[] = [
    {
      id: "123456",
      title: "주술회전",
      image: "https://url.kr/lo4miy",
      review: "리뷰1입니다리뷰1입니다리뷰1입니다리뷰1입니다",
      rating: 4.8,
    },
    {
      id: "123457",
      title:
        "레벨 1이지만 유니크 스킬로 최강이 되었습니다 레벨 1이지만 유니크 스킬로 최강이 되었습니다",
      image: "https://url.kr/azbxi1",
      review: "리뷰2입니다리뷰2입니다리뷰2입니다리뷰2입니다",
      rating: 4.5,
    },
    {
      id: "123458",
      title: "제목333",
      image: "https://url.kr/txfijy",
      review: "리뷰3입니다리뷰3입니다리뷰3입니다리뷰3입니다",
      rating: 4.2,
    },
    {
      id: "123459",
      title: "제목444",
      image: "https://url.kr/4gtucf",
      review: "리뷰4입니다리뷰4입니다리뷰4입니다리뷰4입니다",
      rating: 3.5,
    },
  ];
  const RankingAni: IRanking[] = [
    {
      id: "123451",
      title: "봇치더락",
      image: "https://url.kr/dkt2w7",
      genre: "판타지/액션",
      rank: 1,
      rating: 4.8,
    },
    {
      id: "123452",
      title: "카구야 님은 고백받고 싶어~ 카구야 님은 고백받고 싶어~",
      image: "https://url.kr/azbxi1",
      genre: "장르2",
      rank: 2,
      rating: 4.5,
    },
    {
      id: "123453",
      title: "주술회전",
      image: "https://url.kr/ma76s1",
      genre: "장르3",
      rank: 3,
      rating: 4.3,
    },
    {
      id: "123454",
      title: "4등인애니라네요",
      image: "https://url.kr/txfijy",
      genre: "장르4",
      rank: 4,
      rating: 3.9,
    },
    {
      id: "123455",
      title: "5등애니요",
      image: "https://url.kr/4gtucf",
      genre: "장르5",
      rank: 5,
      rating: 4.8,
    },
    {
      id: "123456",
      title: "6등애니",
      image: "https://url.kr/ma76s1",
      genre: "장르6",
      rank: 6,
      rating: 4.5,
    },
    {
      id: "123457",
      title: "7등애니7등애니7등애니7등애니7등애니",
      image: "https://url.kr/ma76s1",
      genre: "장르7",
      rank: 7,
      rating: 4.3,
    },
    {
      id: "123458",
      title: "8등애니8등애니8등애니",
      image: "https://url.kr/ma76s1",
      genre: "장르8",
      rank: 8,
      rating: 4.7,
    },
    {
      id: "123459",
      title: "9등애니9등애니9등애니",
      image: "https://url.kr/ma76s1",
      genre: "장르9",
      rank: 9,
      rating: 3.3,
    },
    {
      id: "123460",
      title: "10등애니라네요",
      image: "https://url.kr/ma76s1",
      genre: "장르10",
      rank: 10,
      rating: 3.5,
    },
  ];
  const CardAni: Omit<Animation, "review"> = {
    id: "123456",
    title: "주술회전",
    image: "https://url.kr/lo4miy",
    rating: 4.8,
  };
  const CardAni2: Omit<Animation, "review"> = {
    id: "123457",
    title:
      "레벨 1이지만 유니크 스킬로 최강이 되었습니다 레벨 1이지만 유니크 스킬로 최강이 되었습니다",
    image: "https://url.kr/azbxi1",
    rating: 4.5,
  };
  const SlideAni: Omit<Animation, "review">[] = [
    CardAni,
    CardAni2,
    CardAni,
    CardAni2,
    CardAni,
    CardAni2,
    CardAni,
    CardAni2,
    CardAni,
    CardAni2,
  ];

  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isnameModalVisible, setIsNameModalVisible] = useState(false);

  const handlerReviewButtonClick = () => {
    if (isLoggedIn) navigate("/search");
    else navigate("/login");
  };

  useEffect(() => {
    if (isLoggedIn && user.name[14] === "4") {
      setIsNameModalVisible(true);
    }
  }, [user, isLoggedIn]);

  return (
    <Container>
      <NameModal
        isVisible={isnameModalVisible}
        onClose={() => setIsNameModalVisible(false)}
      />
      <AnimationCarousel animations={CarouselAni} />
      <AnimationRanking title="이번주 TOP10" contents={RankingAni} />
      <Discord />
      <AnimationSlide title="2023년 3분기 신작" animations={SlideAni} />
      <RecentReview />
      <AnimationSlide title="덕후들의 눈물샘을 터뜨린" animations={SlideAni} />
      <AnimationSlide title="이불밖을 못 나오게 하는" animations={SlideAni} />
      <Bottom>
        <span>감명 깊게 본 애니를 다른 회원님들과 공유해보세요!</span>
        <Button name="리뷰" size="lg" onClick={handlerReviewButtonClick}>
          한줄리뷰 남기러가기
        </Button>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
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
