import { useState } from "react";

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

  return (
    <ReviewComentContainer textSize={textSize}>
      {isSpoilerComment && <SpoilerComment onClick={handleShowSpoilerClick} />}
      {!isSpoilerComment && text}
    </ReviewComentContainer>
  );
}
