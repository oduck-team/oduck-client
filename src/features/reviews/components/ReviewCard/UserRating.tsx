import Avatar from "@/components/Avatar";
import Rating from "@/components/Rating";

import { CreatorContainer, Username } from "./UserRating.style";

interface UserRatingProps {
  user: {
    nickname: string;
    image: string;
  };
  rating: number;
}

export default function UserRating({ user, rating }: UserRatingProps) {
  return (
    <CreatorContainer>
      <Rating color="secondary" value={rating} size="sm" readonly />
      <div>
        <Username>{user.nickname}</Username>
        <Avatar src={user.image} userName={user.nickname} size="xs" />
      </div>
    </CreatorContainer>
  );
}
