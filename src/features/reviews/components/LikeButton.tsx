import { Heart } from "iconoir-react";

import { Container } from "./LikeButton.style";

export interface LikeButtonProps {
  readonly isLike: boolean;
  readonly count: number;
  readonly onClick: () => void;
}

export default function LikeButton({
  isLike,
  count = 0,
  onClick,
}: LikeButtonProps) {
  return (
    <Container onClick={onClick} isLike={isLike}>
      <Heart width={16} height={16} />
      <span> {count}</span>
    </Container>
  );
}
