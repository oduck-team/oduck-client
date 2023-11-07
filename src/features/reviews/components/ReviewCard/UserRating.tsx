import Avatar from "@/components/Avatar";
import Rating from "@/components/Rating";

import { CreatorContainer, Username } from "./UserRating.style";

interface UserRatingProps {
  user: {
    name: string;
    thumbnail: string;
  };
  rating: number;
}

export default function UserRating({ user, rating }: UserRatingProps) {
  return (
    <CreatorContainer>
      <Rating color="secondary" value={rating} size="sm" readonly />
      <div>
        <Username>{user.name}</Username>
        <Avatar src={user.thumbnail} userName={user.name} size="xs" />
      </div>
    </CreatorContainer>
  );
}
