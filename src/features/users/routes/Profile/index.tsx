import ReviewCard from "@/features/reviews/components/ReviewCard";
import ReviewLikeButton from "@/features/reviews/components/ReviewLikeButton";
import ReviewMoreButton from "@/features/reviews/components/ReviewMoreButton";

import AboutMe from "./AboutMe";
import { Container, StyleCardReview } from "./style";

export default function Profile() {
  return (
    <Container>
      <AboutMe />
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
