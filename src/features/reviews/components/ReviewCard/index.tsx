import { StrictPropsWithChildren } from "@/types";

import ActionBar from "./ActionBar";
import Animation from "./Animation";
import ReviewComent from "./ReviewComent";
import { ReviewCardContainer } from "./style";
import UserRating from "./UserRating";

export interface ReviewCardProps {
  /*** isBlock: 위, 아래 border를 양옆에 붙이는 옵션 */
  isBlock?: boolean;
}

export default function ReviewCard({
  isBlock,
  children,
}: StrictPropsWithChildren<ReviewCardProps>) {
  return (
    <ReviewCardContainer isBlock={isBlock}>{children}</ReviewCardContainer>
  );
}

ReviewCard.Animation = Animation;
ReviewCard.UserRating = UserRating;
ReviewCard.Comment = ReviewComent;
ReviewCard.ActionBar = ActionBar;
