import Button from "@/components/Button";

import { useBookmark } from "../hooks/useBookmark";

interface BookmarkButtonProps {
  isBookmarked: boolean;
}

export default function BookmarkButton({ isBookmarked }: BookmarkButtonProps) {
  useBookmark();

  const handleClick = () => {};

  return (
    <Button
      name="입덕 버튼"
      size="lg"
      isBlock
      color={isBookmarked ? "primary" : "neutral"}
      style={{ fontSize: "14px" }}
    >
      {isBookmarked ? "입덕한 애니" : "입덕하기"}
    </Button>
  );
}
