import { useState } from "react";

import Rating from "@/components/Rating";
import LoginAlertModal from "@/features/auth/components/LoginAlertModal";
import useAuth from "@/hooks/useAuth";

import ShortReviewModal from "./ShortReviewModal";
import { ReviewRecommend } from "./style";

interface ReviewRatingProps {
  animationId: number;
}

export default function ReviewRating({ animationId }: ReviewRatingProps) {
  const hasEvaluated = true; // dev용 변수
  const hasReviewed = true; // dev용 변수

  const { isLoggedIn } = useAuth();
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);

  // TODO: 사용자가 평가한 점수 가져오기
  console.log(animationId);

  const handleRate = (value: number) => {
    if (!isLoggedIn) {
      setIsLoginModalVisible(true);
      return;
    }
    // TODO: 점수 등록 요청하기
    console.log(value);
  };

  return (
    <>
      <Rating size="lg" onRate={handleRate} />
      {hasEvaluated && (
        <ReviewRecommend>
          <button onClick={() => setIsReviewModalVisible(true)}>
            한 줄 리뷰를 남겨보세요
          </button>
        </ReviewRecommend>
      )}
      {hasReviewed && "TODO: 사용자 리뷰 렌더링 "}
      <ShortReviewModal
        isVisible={isReviewModalVisible}
        onClose={() => setIsReviewModalVisible(false)}
        onReview={() => setIsReviewModalVisible(false)}
      />
      <LoginAlertModal
        isVisible={isLoginModalVisible}
        onClose={() => setIsLoginModalVisible(false)}
      />
    </>
  );
}
