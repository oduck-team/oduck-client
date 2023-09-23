import ReviewCard from "@/features/reviews/components/ReviewCard";
import ReviewLikeButton from "@/features/reviews/components/ReviewLikeButton";
import ReviewMoreButton from "@/features/reviews/components/ReviewMoreButton";

import { Container } from "./Review.style";

interface ReviewProps {
  review: {
    animation: {
      title: string;
      image: string;
      rating: number;
    };
    content: string;
    createdAt: string;
  };
}

export default function Review({ review }: ReviewProps) {
  return (
    <>
      <Container>
        <ReviewCard.Animation
          title={review.animation.title}
          image={review.animation.image}
          rating={review.animation.rating}
        />
        <ReviewCard.Content>{review.content}</ReviewCard.Content>
        <ReviewCard.Actions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <time
              dateTime="2023-04-01"
              style={{ fontSize: "12px", color: "#adaeb8" }}
            >
              {review.createdAt}
            </time>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <ReviewLikeButton isLike={false} count={0} onClick={() => {}} />
            <ReviewMoreButton />
          </div>
        </ReviewCard.Actions>
      </Container>
    </>
  );
}
