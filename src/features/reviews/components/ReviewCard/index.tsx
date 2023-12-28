import { useNavigate } from "react-router-dom";

import { StrictPropsWithChildren } from "@/types";

import ActionBar from "./ActionBar";
import Anime from "./Animation";
import ReviewComment from "./ReviewComment";
import { ReviewCardContainer } from "./style";
import UserRating from "./UserRating";

export type Border = "bottom" | "top" | "none";

export interface ReviewCardProps {
  /** side-padding(16px)만큼 width를 늘리는 옵션 */
  isBlock?: boolean;
  /** border에 관한 옵션(기본적으로 bottom을 가지고 있음) */
  border?: Border;
  linkTo?: string;
}

export default function ReviewCard({
  isBlock,
  border = "bottom",
  linkTo,
  children,
}: StrictPropsWithChildren<ReviewCardProps>) {
  const navigate = useNavigate();
  const handleClick = () => {
    linkTo && navigate(linkTo);
  };
  return (
    <ReviewCardContainer
      isBlock={isBlock}
      border={border}
      cursorPointer={linkTo ? true : false}
      onClick={handleClick}
    >
      {children}
    </ReviewCardContainer>
  );
}

ReviewCard.Anime = Anime;
ReviewCard.UserRating = UserRating;
ReviewCard.Comment = ReviewComment;
ReviewCard.ActionBar = ActionBar;
