import { useState } from "react";

import { ReviewComentContainer } from "./ReviewComent.style";
import SpoilerComment from "./SpoilerComment";

interface ReviewTextProps {
  text: string;
  isSpoiler: boolean;
}

export default function ReviewComent({ text, isSpoiler }: ReviewTextProps) {
  const [isSpoilerComment, setIsSpoilerComment] = useState(isSpoiler);
  const handleShowSpoilerClick = () => setIsSpoilerComment(false);

  return (
    <ReviewComentContainer>
      {isSpoilerComment && <SpoilerComment onClick={handleShowSpoilerClick} />}
      {!isSpoilerComment && text}
    </ReviewComentContainer>
  );
}
