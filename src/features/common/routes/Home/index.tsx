import styled from "@emotion/styled";

import Button from "@/components/Button";
import AnimationCarousel, {
  Animation,
} from "@/features/animations/components/AnimationCarousel";
import AnimationRanking, {
  IRanking,
} from "@/features/animations/components/AnimationRanking";
import AnimationSlide from "@/features/animations/components/AnimationSlide";
import ReviewCard from "@/features/reviews/components/ReviewCard";
import ReviewLikeButton from "@/features/reviews/components/ReviewLikeButton";
import ReviewMoreButton from "@/features/reviews/components/ReviewMoreButton";

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

  return (
    <Container>
      <AnimationCarousel animations={CarouselAni} />
      <AnimationRanking title="이번주 TOP10" contents={RankingAni} />
      <DiscordContainer>
        <div>
          <span>오덕&nbsp;</span>
          <span>Discord</span>
        </div>
        <p>오덕 디스코드에 참여해 보세요!</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="22"
          viewBox="0 0 29 22"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.6175 1.88492C24.6175 1.88492 22.1878 0.24234 18.3431 0L17.8089 1.53485C17.8128 1.52399 16.1014 1.26639 15.9905 1.25543C15.0223 1.15961 13.9886 1.17038 13.0184 1.24567C12.9046 1.25452 11.1898 1.53192 11.1907 1.53494L10.6566 9.15527e-05C6.81183 0.242432 4.38214 1.88501 4.38214 1.88501C-1.35858 10.825 0.19025 18.1763 0.19025 18.1763C2.11261 20.2228 7.63947 22 7.63947 22L9.10773 19.4149L6.75812 18.3379L7.10529 17.6378C9.12482 18.6562 11.4383 19.2146 13.6907 19.3363C15.7054 19.4451 17.765 19.1317 19.6873 18.5265C19.8001 18.4911 19.9124 18.4544 20.0242 18.4164C20.2874 18.3272 20.5486 18.2311 20.8065 18.1277C20.9119 18.0853 21.8651 17.6085 21.8939 17.6378L22.241 18.3379L19.8914 19.4149L21.3602 22C21.3602 22 26.887 20.2228 28.8094 18.1763C28.8094 18.1763 30.3582 10.825 24.6175 1.88492ZM9.72199 14.864C11.1639 14.864 12.3323 13.5801 12.3323 11.9963C12.3323 10.4124 11.1639 9.12851 9.72199 9.12851C8.28058 9.12851 7.11212 10.4124 7.11212 11.9963C7.11212 13.5801 8.28058 14.864 9.72199 14.864ZM21.8875 11.9963C21.8875 13.5801 20.7191 14.864 19.2772 14.864C17.8358 14.864 16.6673 13.5801 16.6673 11.9963C16.6673 10.4124 17.8358 9.12851 19.2772 9.12851C20.7191 9.12851 21.8875 10.4124 21.8875 11.9963Z"
            fill="white"
          />
        </svg>
      </DiscordContainer>
      <AnimationSlide title="2023년 3분기 신작" animations={SlideAni} />
      <RecentReview>
        <Header>
          <h1>최근 한줄리뷰</h1>
          <Button name="더보기" styleType="text" size="sm" color="neutral">
            더보기
          </Button>
        </Header>
        <StyleCardReview>
          <ReviewCard.Animation
            title="레벨 1이지만 유니크 스킬로 최강이 되었습니다"
            image="https://url.kr/4gtucf"
            rating={10}
          />
          <ReviewCard.Content>
            너무너무 재밌게 안 봤습니다. 애니제목을 왜 이딴식으로 짓는지 이해가
            안 가네요
            하하하하하하하하하하하하하하하하하하하하핳아항항핳하아항하하하하아항하아항하아항항
          </ReviewCard.Content>
          <ReviewCard.Actions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <time dateTime="2023-04-01" style={{ fontSize: "12px" }}>
                2023.07.30
              </time>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <ReviewLikeButton isLike={false} count={0} onClick={() => {}} />
              <ReviewMoreButton />
            </div>
          </ReviewCard.Actions>
        </StyleCardReview>
      </RecentReview>
      <AnimationSlide title="덕후들의 눈물샘을 터뜨린" animations={SlideAni} />
      <AnimationSlide title="이불밖을 못 나오게 하는" animations={SlideAni} />
      <Bottom>
        <span>감명 깊게 본 애니를 다른 회원님들과 공유해보세요!</span>
        <Button name="리뷰" size="lg">
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

const DiscordContainer = styled.div`
  width: 328px;
  height: 80px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors["primary"]["60"]};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 18px;

  span {
    ${({ theme }) => theme.typo["title-2-b"]};
    font-family: "Gmarket Sans";
    line-height: 120%;
  }

  span:first-of-type {
    color: ${({ theme }) => theme.colors["neutral"]["05"]};
  }

  span:last-of-type {
    color: ${({ theme }) => theme.colors["neutral"]["10"]};
  }

  & > p {
    ${({ theme }) => theme.typo["body-3-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["20"]};
  }

  & > svg {
    width: 29px;
    height: 22px;
    position: absolute;
    top: 29px;
    right: 30px;
  }
`;

const RecentReview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: solid 1px ${({ theme }) => theme.colors["neutral"]["05"]};
`;

const Header = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    color: ${({ theme }) => theme.colors["neutral"]["100"]};
    ${({ theme }) => theme.typo["title-2-m"]};
  }
`;

const StyleCardReview = styled(ReviewCard)`
  border-top: solid 2px ${({ theme }) => theme.colors["neutral"]["05"]};
  border-bottom: solid 2px ${({ theme }) => theme.colors["neutral"]["05"]};
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
