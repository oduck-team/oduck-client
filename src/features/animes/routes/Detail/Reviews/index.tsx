import Chip from "@/components/Chip";
import ReviewCard from "@/features/reviews/components/ReviewCard";

import { Section, TotalReviews } from "./style";

const REVIEW_MOCK_DATA = {
  user: {
    nickname: "동동동",
    image: "",
  },
  rating: 5,
  comment: "제목이 뭐이리기냐 제목부터 맘에안듬",
  isSpoiler: true,
  isLike: true,
  likeCount: 310,
  isMine: true,
};

export default function Reviews() {
  return (
    <Section>
      <h1>한 줄 리뷰</h1>
      <TotalReviews>총 1,120명이 리뷰를 남겨 주셨어요</TotalReviews>
      <ul
        style={{
          display: "flex",
          gap: "4px",
          paddingBottom: "16px",
        }}
      >
        <li>
          <Chip variant="selectable" active>
            좋아요순
          </Chip>
        </li>
        <li>
          <Chip variant="selectable">최신순</Chip>
        </li>
        <li>
          <Chip variant="selectable">평점 높은 순</Chip>
        </li>
        <li>
          <Chip variant="selectable">평점 낮은 순</Chip>
        </li>
      </ul>

      <ul>
        <li>
          <ReviewCard>
            <ReviewCard.UserRating
              user={REVIEW_MOCK_DATA.user}
              rating={REVIEW_MOCK_DATA.rating}
            />
            <ReviewCard.Comment
              text={REVIEW_MOCK_DATA.comment}
              textSize="sm"
              isSpoiler={REVIEW_MOCK_DATA.isSpoiler}
            />
            {/* TODO: isMine 판별 */}
            <ReviewCard.ActionBar
              isMine={REVIEW_MOCK_DATA.isMine}
              isLike={REVIEW_MOCK_DATA.isLike}
              likeCount={REVIEW_MOCK_DATA.likeCount}
            />
          </ReviewCard>
        </li>
      </ul>
    </Section>
  );
}
