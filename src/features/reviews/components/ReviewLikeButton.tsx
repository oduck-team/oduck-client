import { Heart } from "iconoir-react";

import { Container } from "./ReviewLikeButton.style";

export interface ReviewLikeButtonProps {
  isLike: boolean;
  count: number;
  onClick: () => void;
}

export default function ReviewLikeButton({
  isLike,
  count = 0,
  onClick,
}: ReviewLikeButtonProps) {
  return (
    <Container onClick={onClick} isLike={isLike} aria-label="좋아요">
      <Heart width={16} height={16} />
      <span> {count}</span>
    </Container>
  );
}
