import styled from "@emotion/styled";

import Button from "@/components/Button";
import ReviewCard from "@/features/reviews/components/ReviewCard";
import ReviewLikeButton from "@/features/reviews/components/ReviewLikeButton";
import ReviewMoreButton from "@/features/reviews/components/ReviewMoreButton";

export default function RecentReview() {
  return (
    <Container>
      <Header>
        <h1>최근 한줄리뷰</h1>
        <Button name="더보기" styleType="text" size="sm" color="neutral">
          더보기
        </Button>
      </Header>
      <StyleCardReview>
        <ReviewCard.Animation
          title="레벨 1이지만 유니크 스킬로 최강이 되었습니다"
          image="https://url.kr/4gtucf"
          rating={10}
        />
        <ReviewCard.Content>
          너무너무 재밌게 안 봤습니다. 애니제목을 왜 이딴식으로 짓는지 이해가 안
          가네요
          하하하하하하하하하하하하하하하하하하하하핳아항항핳하아항하하하하아항하아항하아항항
        </ReviewCard.Content>
        <ReviewCard.Actions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <time dateTime="2023-04-01" style={{ fontSize: "12px" }}>
              2023.07.30
            </time>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <ReviewLikeButton isLike={false} count={0} onClick={() => {}} />
            <ReviewMoreButton />
          </div>
        </ReviewCard.Actions>
      </StyleCardReview>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: solid 1px ${({ theme }) => theme.colors["neutral"]["05"]};
`;

const Header = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    color: ${({ theme }) => theme.colors["neutral"]["100"]};
    ${({ theme }) => theme.typo["title-2-m"]};
  }
`;

const StyleCardReview = styled(ReviewCard)`
  border-top: solid 2px ${({ theme }) => theme.colors["neutral"]["05"]};
  border-bottom: solid 2px ${({ theme }) => theme.colors["neutral"]["05"]};
`;
