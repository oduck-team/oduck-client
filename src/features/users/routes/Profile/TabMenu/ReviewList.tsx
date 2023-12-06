import ReviewCard from "@/features/reviews/components/ReviewCard";
import { ReviewListResponse } from "@/features/users/api/profile";

import EmptyList from "./EmptyList";

interface ReviewListProps {
  isMine: boolean;
  list: ReviewListResponse[];
  isLoading: boolean;
}

export default function ReviewList({
  isMine,
  list,
  isLoading,
}: ReviewListProps) {
  return (
    <>
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
            isLike={review.isLike}
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
