import { useNavigate } from "react-router-dom";

import ReviewCard from "@/features/reviews/components/ReviewCard";

import EmptyList from "./EmptyList";

interface ReviewListProps {
  isMine: boolean;
  list: Review[];
}

export default function ReviewList({ isMine, list }: ReviewListProps) {
  const navigate = useNavigate();
  const handleClick = (to: string) => navigate(to);
  return (
    <>
      {list.length === 0 && (
        <EmptyList
          message="입덕한 애니가 없어요. 애니를 추가해 보세요"
          buttonText="애니 추가하러 가기"
          linkTo="/animes"
        />
      )}
      {list.map((review) => (
        <ReviewCard
          key={review.anime.animeId}
          isBlock
          onClick={() => handleClick(`/animes/${review.anime.animeId}`)}
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
