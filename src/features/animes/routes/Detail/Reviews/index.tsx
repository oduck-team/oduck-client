import Chip from "@/components/Chip";
import Loader from "@/components/Loader";
import useAuth from "@/features/auth/hooks/useAuth";
import ReviewCard from "@/features/reviews/components/ReviewCard";
import useGetAnimeReviews from "@/features/reviews/hook/useGetAnimeReviews";

import LoadingReviews from "../LoadingReviews";

import EmptyReview from "./Empty";
import { Section, TotalReviews } from "./style";

interface Props {
  totalReviewCount: number;
  animeId: number;
}

export default function Reviews({ totalReviewCount, animeId }: Props) {
  const { user } = useAuth();

  const {
    reviews: data,
    isFetchingNextPage,
    isLoading,
    targetRef,
    SORT_OPTION,
    selectedSortOption,
    handleChipClick,
  } = useGetAnimeReviews(Number(animeId));

  const reviews = data?.pages ?? [];

  return (
    <>
      <Section>
        <h1>한 줄 리뷰</h1>
        {!isLoading && reviews.length === 0 && <EmptyReview />}
        {(isLoading || (!isLoading && reviews.length !== 0)) && (
          <div>
            <TotalReviews>
              총 {totalReviewCount.toLocaleString()}명이 리뷰를 남겨 주셨어요
            </TotalReviews>
            <ul>
              {SORT_OPTION.map((option, i) => (
                <li key={option.label}>
                  <Chip
                    variant="selectable"
                    onClick={() => handleChipClick(i)}
                    active={selectedSortOption.label === option.label}
                  >
                    {option.label}
                  </Chip>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isLoading && <LoadingReviews />}
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
                    isMine={user?.name === review.name}
                    likeCount={review.likeCount}
                    createdAt={review.createdAt}
                    reviewId={review.reviewId}
                    animeId={review.animeId}
                    isSpoiler={review.isSpoiler}
                    content={review.content}
                    score={review.score}
                  />
                </ReviewCard>
              </li>
            ))}
          </ul>
        )}
      </Section>
      <div ref={targetRef}></div>
      {isFetchingNextPage && <Loader display="oduck" />}
    </>
  );
}
