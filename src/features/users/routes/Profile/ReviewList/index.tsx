import ReviewCard from "@/features/reviews/components/ReviewCard";

import { ReviewListContainer, ReviewTitle } from "./style";

const REVIEW_RIST = [
  {
    animation: {
      title: "레벨 1이지만 유니크 스킬로 최강이 되었습니다",
      image:
        "https://i.namu.wiki/i/v8ca2gF_MPV_L4QZGoN449G29Nt8vy3PtSLKv1T9XwmZBJ8p1GTz3S3Y32sXB-eoGDv5npoGXzpD6fASoQFLwg.webp",
      rating: 10,
    },
    comment:
      "너무너무 재밌게 안 봤습니다. 애니제목을 왜 이딴식으로 짓는지 이해가 안가네요하하하하하하하하하하하하하하하하하하하하핳아항항핳하아항하하하하아항하아항하아항항",
    createdAt: "2023.07.30",
  },
  {
    animation: {
      title:
        "아주 긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴 제목을 가지고 있는 애니메이션",
      image: "https://url.kr/4gtucf",
      rating: 3,
    },
    comment: "원피스는 언제 찾아",
    createdAt: "2023.07.29",
  },
];

export default function ReviewList() {
  return (
    <>
      <ReviewTitle>한줄리뷰</ReviewTitle>
      <ReviewListContainer>
        {REVIEW_RIST.map((review, index) => (
          <ReviewCard key={index} isBlock>
            <ReviewCard.Animation animation={review.animation} />
            <ReviewCard.Comment text={review.comment} />
            <ReviewCard.ActionBar include="time" createdAt={review.createdAt} />
          </ReviewCard>
        ))}
      </ReviewListContainer>
    </>
  );
}
