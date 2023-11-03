import ReviewCard from "@/features/reviews/components/ReviewCard";

import EmptyList from "./EmptyList";

interface ReviewListProps {
  isMine: boolean;
  list: Review[];
}

export default function ReviewList({ isMine, list }: ReviewListProps) {
  return (
    <>
      {list.length === 0 && (
        <EmptyList
          message="작성한 리뷰가 없어요. 리뷰를 작성해 보세요."
          buttonText="리뷰 작성하기"
          linkTo="/animes"
          isMine={isMine}
        />
      )}
      {list.map((review) => (
        <ReviewCard
          key={review.anime.animeId}
          isBlock
          linkTo={`/animes/${review.anime.animeId}`}
        >
          <ReviewCard.Anime anime={review.anime} />
          <ReviewCard.Comment
            text={review.comment}
            isSpoiler={review.isSpoiler}
          />
          <ReviewCard.ActionBar
            include="time"
            createdAt={review.createdAt}
            isTimeAgo={false}
            isMine={isMine}
            isLike={review.isLike}
            likeCount={review.likeCount}
          />
        </ReviewCard>
      ))}
    </>
  );
}
