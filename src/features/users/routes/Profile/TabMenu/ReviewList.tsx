import ReviewCard from "@/features/reviews/components/ReviewCard";
import ReviewCardSkeleton from "@/features/reviews/components/ReviewCard/ReviewCardSkeleton";
import { ReviewListResponse } from "@/features/users/api/profile";

import EmptyList from "./EmptyList";

interface ReviewListProps {
  isMine: boolean;
  memberId: number;
  list: ReviewListResponse[];
  isLoading: boolean;
}

export default function ReviewList({
  isMine,
  memberId,
  list,
  isLoading,
}: ReviewListProps) {
  return (
    <>
      {isLoading &&
        Array.from({ length: 2 }, (_, index) => (
          <ReviewCardSkeleton key={index} />
        ))}

      {list.length === 0 && !isLoading && (
        <EmptyList
          message={`작성한 리뷰가 없어요.${
            isMine ? " 리뷰를 작성해 보세요" : ""
          } `}
          buttonText="리뷰 작성하기"
          linkTo="/animes"
          isMine={isMine}
        />
      )}

      {list.map((review) => (
        <ReviewCard
          key={review.animeId}
          isBlock
          linkTo={`/animes/${review.animeId}`}
        >
          <ReviewCard.Anime
            anime={{
              title: review.title,
              thumbnail: review.thumbnail,
              avgScore: review.score,
            }}
          />
          <ReviewCard.Comment
            text={review.content}
            isSpoiler={review.isSpoiler}
          />
          <ReviewCard.ActionBar
            createdAt={review.createdAt}
            isTimeAgo={false}
            isMine={isMine}
            memberId={memberId}
            likeCount={review.likeCount}
            reviewId={review.reviewId}
            animeId={review.animeId}
            isSpoiler={review.isSpoiler}
            content={review.content}
            score={review.score}
          />
        </ReviewCard>
      ))}
    </>
  );
}
