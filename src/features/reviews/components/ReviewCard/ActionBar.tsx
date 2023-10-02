import { ActionBarContainer, ButtonContainer } from "./ActionBar.style";
import ReviewLikeButton from "./ReviewLikeButton";
import ReviewMoreButton from "./ReviewMoreButton";

export type Include = "time" | "common";

export interface ActionBarProps {
  include?: Include;
  createdAt?: string;
}
export default function ActionBar({
  include = "common",
  createdAt,
}: ActionBarProps) {
  return (
    <ActionBarContainer include={include}>
      {include === "time" && <time>{createdAt}</time>}
      <ButtonContainer include={include}>
        <ReviewLikeButton isLike={false} count={0} onClick={() => {}} />
        <ReviewMoreButton />
      </ButtonContainer>
    </ActionBarContainer>
  );
}