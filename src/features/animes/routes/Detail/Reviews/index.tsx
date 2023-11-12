import Chip from "@/components/Chip";
import { ReviewInfo } from "@/features/reviews/api/review";
import ReviewCard from "@/features/reviews/components/ReviewCard";
import { ReviewSortOption } from "@/features/reviews/hook/useGetAnimeReviews";

import LoadingReviews from "../LoadingReviews";

import { Section, TotalReviews } from "./style";

interface Props {
  reviews: ReviewInfo[];
  isLoading: boolean;
  totalReviewCount: number;
  handleChipClick: (i: number) => void;
  sortOptions: ReviewSortOption[];
  selectedOption: ReviewSortOption;
}

export default function Reviews({
  reviews,
  isLoading,
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
      {isLoading && <LoadingReviews />}
      {/* { TODO: 리뷰가 0개일 때 디자인 적용 } */}
      {!isLoading && reviews.length !== 0 && (
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
                  isSpoiler={review.isSpoiler}
                />
                <ReviewCard.ActionBar
                  isMine={review.isMine}
                  isLiked={review.isLiked}
                  likeCount={review.likeCount}
                  createdAt={review.createdAt}
                />
              </ReviewCard>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
