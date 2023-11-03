import { Button, Info, SpoilerCommentContainer } from "./SpoilerComment.style";

interface SpoilerCommentProps {
  onClick: () => void;
}

export default function SpoilerComment({ onClick }: SpoilerCommentProps) {
  return (
    <SpoilerCommentContainer onClick={(e) => e.stopPropagation()}>
      <Info>스포일러를 포함한 리뷰에요!</Info>
      <Button type="button" onClick={onClick}>
        리뷰보기
      </Button>
    </SpoilerCommentContainer>
  );
}
