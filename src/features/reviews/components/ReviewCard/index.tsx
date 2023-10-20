import { StrictPropsWithChildren } from "@/types";

import ActionBar from "./ActionBar";
import Anime from "./Animation";
import ReviewComent from "./ReviewComent";
import { ReviewCardContainer } from "./style";
import UserRating from "./UserRating";

export interface ReviewCardProps {
  /** side-padding(16px)만큼 width를 늘리는 옵션 */
  isBlock?: boolean;
  /** border top을 생기게 하는 옵션 */
  isBorderTop?: boolean;
}

export default function ReviewCard({
  isBlock,
  isBorderTop = true,
  children,
}: StrictPropsWithChildren<ReviewCardProps>) {
  return (
    <ReviewCardContainer isBlock={isBlock} isBorderTop={isBorderTop}>
      {children}
    </ReviewCardContainer>
  );
}

ReviewCard.Anime = Anime;
ReviewCard.UserRating = UserRating;
ReviewCard.Comment = ReviewComent;
ReviewCard.ActionBar = ActionBar;
