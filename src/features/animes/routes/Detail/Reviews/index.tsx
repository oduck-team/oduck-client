import Chip from "@/components/Chip";
import { ReviewInfo } from "@/features/reviews/api/review";
import ReviewCard from "@/features/reviews/components/ReviewCard";
import { ReviewSortOption } from "@/features/reviews/hook/useGetAnimeReviews";

import { Section, TotalReviews } from "./style";

interface Props {
  reviews: ReviewInfo[];
  totalReviewCount: number;
  handleChipClick: (i: number) => void;
  sortOptions: ReviewSortOption[];
  selectedOption: ReviewSortOption;
}

export default function Reviews({
  reviews,
  totalReviewCount,
  sortOptions,
  selectedOption,
  handleChipClick,
}: Props) {
  return (
    <Section>
      <h1>한 줄 리뷰</h1>
      <TotalReviews>
        총 {totalReviewCount.toLocaleString()}명이 리뷰를 남겨 주셨어요
      </TotalReviews>
      <ul>
        {sortOptions.map((option, i) => (
          <li key={option.label}>
            <Chip
              variant="selectable"
              onClick={() => handleChipClick(i)}
              active={selectedOption.label === option.label}
            >
              {option.label}
            </Chip>
          </li>
        ))}
      </ul>

      <ul>
        {reviews.map((review, i) => (
          <li key={review.reviewId}>
            <ReviewCard border={i === 0 ? "top" : "bottom"}>
              <ReviewCard.UserRating
                user={{ name: review.name, thumbnail: review.thumbnail }}
                rating={review.score}
              />
              <ReviewCard.Comment
                text={review.content}
                textSize="sm"
                isSpoiler={review.hasSpoiler}
              />
              <ReviewCard.ActionBar
                isMine={review.isMine}
                isLike={review.hasLike}
                likeCount={review.likeCount}
                include="time"
                createdAt={review.createdAt}
              />
            </ReviewCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
