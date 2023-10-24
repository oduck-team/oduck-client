import ReviewCard from "@/features/reviews/components/ReviewCard";

interface ReviewListProps {
  isMine: boolean;
  list: Review[];
}

export default function ReviewList({ isMine, list }: ReviewListProps) {
  return (
    <>
      {list.map((review) => (
        <ReviewCard key={review.anime.animeId} isBlock isBorderTop={false}>
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
