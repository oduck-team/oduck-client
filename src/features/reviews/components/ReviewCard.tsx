import Avatar from "@/components/Avatar";
import Rating from "@/components/Rating";

import ActionBar from "./ActionBar";
import {
  CreatorContainer,
  ReviewCardContainer,
  Username,
} from "./ReviewCard.style";
import ReviewText from "./ReviewText";

interface ReviewCardProps {
  review: {
    user: {
      nickname: string;
      image: string;
    };
    rating: number;
    content: string;
  };
}

export default function ReviewCard({
  review: { user, content, rating },
}: ReviewCardProps) {
  return (
    <ReviewCardContainer>
      <CreatorContainer>
        <Rating color="secondary" value={rating} size="sm" readonly />
        <div>
          <Username>{user.nickname}</Username>
          <Avatar src={user.image} userName={user.nickname} size="xs" />
        </div>
      </CreatorContainer>
      <ReviewText text={content} />
      <ActionBar include="common" />
    </ReviewCardContainer>
  );
}
