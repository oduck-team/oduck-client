import Button from "@/components/Button";
import ReviewCard from "@/features/reviews/components/ReviewCard";

import { Header, RecentReviewContainer, Title, ReviewConainer } from "./style";

const REVIEW_MOCK_DATA = {
  animation: {
    animeId: 1,
    title: "레벨 1이지만 유니크 스킬로 최강이 되었습니다",
    thumbnail:
      "https://i.namu.wiki/i/v8ca2gF_MPV_L4QZGoN449G29Nt8vy3PtSLKv1T9XwmZBJ8p1GTz3S3Y32sXB-eoGDv5npoGXzpD6fASoQFLwg.webp",
    avgScore: 10,
  },
  comment:
    "너무너무 재밌게 안 봤습니다. 애니제목을 왜 이딴식으로 짓는지 이해가 안가네요하하하하하하하하하하하하하하하하하하하하핳아항항핳하아항하하하하아항하아항하아항항",
  createdAt: "2023-10-23T22:15:31.859",
  isSpoiler: true,
  isLike: false,
  likeCount: 3,
};

export default function RecentReview() {
  return (
    <RecentReviewContainer>
      <Header>
        <Title>최근 한줄리뷰</Title>
        <Button name="더보기" variant="text" size="sm" color="neutral">
          더보기
        </Button>
      </Header>
      <ReviewConainer>
        <ReviewCard
          isBlock
          border="none"
          linkTo={`/animes/${REVIEW_MOCK_DATA.animation.animeId}`}
        >
          <ReviewCard.Anime anime={REVIEW_MOCK_DATA.animation} />
          <ReviewCard.Comment
            text={REVIEW_MOCK_DATA.comment}
            isSpoiler={REVIEW_MOCK_DATA.isSpoiler}
          />
          <ReviewCard.ActionBar
            include="time"
            createdAt={REVIEW_MOCK_DATA.createdAt}
            isMine={false} // TODO: isMine 판별
            isLike={REVIEW_MOCK_DATA.isLike}
            likeCount={REVIEW_MOCK_DATA.likeCount}
            isTimeAgo={true}
          />
        </ReviewCard>
      </ReviewConainer>
    </RecentReviewContainer>
  );
}
