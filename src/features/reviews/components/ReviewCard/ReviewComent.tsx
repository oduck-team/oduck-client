import { useEffect, useState } from "react";

import { ReviewComentContainer } from "./ReviewComent.style";
import SpoilerComment from "./SpoilerComment";

export type TextSize = "sm" | "md";

interface ReviewTextProps {
  text: string;
  isSpoiler: boolean;
  textSize?: TextSize;
}

export default function ReviewComent({
  text,
  isSpoiler,
  textSize = "md",
}: ReviewTextProps) {
  const [isSpoilerComment, setIsSpoilerComment] = useState(isSpoiler);
  const handleShowSpoilerClick = () => setIsSpoilerComment(false);

  // 리뷰 수정에서 스포일러 여부 수정 시 바로 반영되도록 함
  useEffect(() => {
    setIsSpoilerComment(isSpoiler);
  }, [isSpoiler]);

  return (
    <ReviewComentContainer textSize={textSize}>
      {isSpoilerComment && <SpoilerComment onClick={handleShowSpoilerClick} />}
      {!isSpoilerComment && text}
    </ReviewComentContainer>
  );
}
