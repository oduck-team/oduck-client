import { StrictPropsWithChildren } from "@/types";

import ActionBar from "./ActionBar";
import Anime from "./Animation";
import ReviewComent from "./ReviewComent";
import { ReviewCardContainer } from "./style";
import UserRating from "./UserRating";

export type Border = "bottom" | "top" | "none";

export interface ReviewCardProps {
  /** side-padding(16px)만큼 width를 늘리는 옵션 */
  isBlock?: boolean;
  /** border에 관한 옵션(기본적으로 bottom을 가지고 있음) */
  border?: Border;
  onClick?: () => void;
}

export default function ReviewCard({
  isBlock,
  border = "bottom",
  onClick,
  children,
}: StrictPropsWithChildren<ReviewCardProps>) {
  return (
    <ReviewCardContainer
      isBlock={isBlock}
      border={border}
      cursorPointer={onClick ? true : false}
      onClick={() => onClick && onClick()}
    >
      {children}
    </ReviewCardContainer>
  );
}

ReviewCard.Anime = Anime;
ReviewCard.UserRating = UserRating;
ReviewCard.Comment = ReviewComent;
ReviewCard.ActionBar = ActionBar;
