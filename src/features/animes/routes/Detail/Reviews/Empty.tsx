import Button from "@/components/Button";

import { EmptyImage, EmptyReivewContainer, Message } from "./Empty.style";

export default function EmptyReview() {
  // 리뷰 작성하기 클릭 시 최상단으로 이동
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <EmptyReivewContainer>
      <EmptyImage src="/logo/logo-empty.png" alt="empty" />
      <Message>작성된 리뷰가 없어요. 첫 리뷰를 작성해 보세요.</Message>
      <Button size="lg" name="리뷰 작성하기" onClick={handleClick}>
        리뷰 작성하기
      </Button>
    </EmptyReivewContainer>
  );
}
