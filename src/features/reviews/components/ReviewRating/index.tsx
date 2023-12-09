import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Rating from "@/components/Rating";
import useToast from "@/components/Toast/useToast";
import LoginAlertModal from "@/features/auth/components/LoginAlertModal";
import useAuth from "@/features/auth/hooks/useAuth";
import useDebounce from "@/hooks/useDebounce";

import useEvaluation from "../../hook/useEvaluation";
import useGetEvaluation from "../../hook/useGetEvaluation";

import ShortReviewModal from "./ShortReviewModal";
import { ReviewRecommend } from "./style";

interface ReviewRatingProps {
  animeId: number;
}

const DEBOUNCE_DELAY = 200;

export default function ReviewRating({ animeId }: ReviewRatingProps) {
  const hasReview = true; // dev용 변수

  const { user } = useAuth();
  const toast = useToast();
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);

  const { data: evaluation } = useGetEvaluation(animeId);
  const evaluationMutation = useEvaluation({ animeId, hasReview });

  const handleRate = useDebounce((value: number) => {
    if (!user) {
      setIsLoginModalVisible(true);
      return;
    }
    // 평가 추가 또는 기존과 다른 점수로 평가 수정 시에만 요청 수행
    if (evaluation?.score !== value)
      evaluationMutation.mutate(
        {
          score: value,
          hasPrevData: Boolean(evaluation),
        },
        {
          onSuccess: () => toast.success({ message: "별점이 등록되었어요." }),
        },
      );
  }, DEBOUNCE_DELAY);

  return (
    <>
      <Rating
        value={evaluation ? evaluation.score : 0}
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
      {hasReview && "TODO: 사용자 리뷰 렌더링 "}

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
