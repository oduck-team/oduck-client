import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Rating from "@/components/Rating";
import LoginAlertModal from "@/features/auth/components/LoginAlertModal";
import useAuth from "@/features/auth/hooks/useAuth";

import ShortReviewModal from "./ShortReviewModal";
import { ReviewRecommend } from "./style";

interface ReviewRatingProps {
  animeId: number;
}

export default function ReviewRating({ animeId }: ReviewRatingProps) {
  const hasEvaluated = true; // dev용 변수
  const hasReviewed = true; // dev용 변수

  const { user } = useAuth();
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);

  // TODO: 사용자가 평가한 점수 가져오기
  console.log(animeId);

  const handleRate = (value: number) => {
    if (!user) {
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

      <AnimatePresence>
        {isReviewModalVisible && (
          <ShortReviewModal
            key="ShortReviewModal"
            onClose={() => setIsReviewModalVisible(false)}
            onReview={() => setIsReviewModalVisible(false)}
          />
        )}

        {isLoginModalVisible && (
          <LoginAlertModal
            key="LoginAlertModal"
            onClose={() => setIsLoginModalVisible(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
