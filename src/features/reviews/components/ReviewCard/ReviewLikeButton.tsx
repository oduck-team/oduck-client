import { Heart } from "@phosphor-icons/react";

import { ReviewLikeButtonContainer } from "./ReviewLikeButton.style";

export interface ReviewLikeButtonProps {
  isLiked: boolean;
  count: number | string;
  onClick: () => void;
}

export default function ReviewLikeButton({
  isLiked,
  count = 0,
  onClick,
}: ReviewLikeButtonProps) {
  return (
    <ReviewLikeButtonContainer
      onClick={onClick}
      isLiked={isLiked}
      aria-label="좋아요"
    >
      <Heart width={16} height={16} />
      <span> {count}</span>
    </ReviewLikeButtonContainer>
  );
}
