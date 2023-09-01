import Chip from "@/components/Chip";
import ReviewLikeButton from "@/features/reviews/components/ReviewLikeButton";
import ReviewMoreButton from "@/features/reviews/components/ReviewMoreButton";
import ReviewSimpleCard from "@/features/reviews/components/ReviewSimpleCard";

import { Section } from ".";

export default function Reviews() {
  return (
    <Section style={{ paddingBottom: "200px" }}>
      <h1>한 줄 리뷰</h1>
      <p style={{ marginTop: "8px", marginBottom: "8px" }}>
        총 1,120명이 리뷰를 남겨 주셨어요
      </p>
      <ul
        style={{
          display: "flex",
          gap: "4px",
          paddingBottom: "16px",
          borderBottom: "1px solid #F1F1F1",
        }}
      >
        <li>
          <Chip styleType="selectable" active>
            좋아요순
          </Chip>
        </li>
        <li>
          <Chip styleType="selectable">최신순</Chip>
        </li>
        <li>
          <Chip styleType="selectable">평점 높은 순</Chip>
        </li>
        <li>
          <Chip styleType="selectable">평점 낮은 순</Chip>
        </li>
      </ul>

      <ul>
        <li>
          <ReviewSimpleCard>
            <ReviewSimpleCard.Header rating={5} userId="123" userName="John" />
            <ReviewSimpleCard.Content isSpoiler={true}>
              스포일러 스포일러 스포일러 스포일러스포일러 스포일러스포일러
              스포일러스포일러 스포일러스포일러 스포일러스포일러
              스포일러스포일러 스포일러스포일러 스포일러스포일러
              스포일러스포일러 스포일러스포일러 스포일러스포일러
              스포일러스포일러 스포일러
            </ReviewSimpleCard.Content>
            <ReviewSimpleCard.Actions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <time dateTime="2023-04-01" style={{ fontSize: "12px" }}>
                  2023.07.30
                </time>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <ReviewLikeButton isLike={false} count={0} onClick={() => {}} />
                <ReviewMoreButton />
              </div>
            </ReviewSimpleCard.Actions>
          </ReviewSimpleCard>
        </li>
      </ul>
    </Section>
  );
}
