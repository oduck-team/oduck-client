import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Rating from "@/components/Rating";
import LoginAlertModal from "@/features/auth/components/LoginAlertModal";
import useAuth from "@/features/auth/hooks/useAuth";

import useEvaluation from "../../hook/useEvaluation";

import ShortReviewModal from "./ShortReviewModal";
import { ReviewRecommend } from "./style";

interface ReviewRatingProps {
  animeId: number;
}

export default function ReviewRating({ animeId }: ReviewRatingProps) {
  const hasReviewed = true; // dev용 변수

  const { isLoggedIn } = useAuth();
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);

  const { data: evaluation, evaluationMutation } = useEvaluation(animeId);
  console.log("평가 여부: ", evaluation?.createdAt);

  const handleRate = (value: number) => {
    if (!isLoggedIn) {
      setIsLoginModalVisible(true);
      return;
    }
    if (evaluation?.score !== value) evaluationMutation.mutate(value);
  };

  return (
    <>
      <Rating
        value={evaluation ? 9 : 0}
        // value={evaluated ? evaluation.score : 0}
        size="lg"
        onRate={handleRate}
      />
      {evaluation && (
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
