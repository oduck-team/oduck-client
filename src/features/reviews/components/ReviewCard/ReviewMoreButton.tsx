import { useTheme } from "@emotion/react";
import { DotsThree } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import BackdropPortal from "@/components/Backdrop/BackdropPortal";
import Rating from "@/components/Rating";
import useToast from "@/components/Toast/useToast";
import DropDownModal from "@/features/users/components/DropDownModal";
import useDropDownModal from "@/features/users/components/DropDownModal/useDropDownModal";
import useDebounce from "@/hooks/useDebounce";

import useEvaluation from "../../hook/useEvaluation";
import ShortReviewModal from "../ReviewRating/ShortReviewModal";

import ReviewDeleteModal from "./ReviewDeleteModal";
import {
  MoreButton,
  MyRating,
  RatingContainer,
} from "./ReviewMoreButton.style";

interface ReviewMoreButtonProps {
  isMine: boolean;
  reviewId: number;
  animeId: number;
  content: string;
  isSpoiler: boolean;
  score: number;
}

const DEBOUNCE_DELAY = 200;

export default function ReviewMoreButton({
  isMine,
  reviewId,
  animeId,
  content,
  score,
  isSpoiler,
}: ReviewMoreButtonProps) {
  const theme = useTheme();
  const { isDropDownModalOpen, handleDropDownModalToggle } = useDropDownModal();
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const evaluationMutation = useEvaluation({ animeId });

  const toast = useToast();

  const handleReviewModalToggle = () =>
    setIsReviewModalVisible((prev) => !prev);

  const handleReviewEditClick = () => {
    handleDropDownModalToggle();
    handleReviewModalToggle();
  };

  const handleRate = useDebounce((value: number) => {
    evaluationMutation.mutate(
      { score: value },
      {
        onSuccess: () => {
          toast.success({ message: "별점이 수정되었어요." });
        },
      },
    );
  }, DEBOUNCE_DELAY);

  const handleReviewDeleteClick = () => {
    handleDropDownModalToggle();
    setIsDeleteModalVisible(true);
  };

  const handleBackdropClick = () => {
    if (isDropDownModalOpen) handleDropDownModalToggle();
    if (isReviewModalVisible) handleReviewModalToggle();
  };

  return (
    <>
      {isMine && (
        <>
          <MoreButton
            name="더보기"
            icon={<DotsThree color={theme.colors.neutral["50"]} />}
            variant="text"
            size="sm"
            color="neutral"
            onClick={handleDropDownModalToggle}
          />

          <AnimatePresence>
            {(isDropDownModalOpen || isReviewModalVisible) && (
              <BackdropPortal onClick={handleBackdropClick} />
            )}

            {isDropDownModalOpen && (
              <DropDownModal
                key="DropDownModal"
                onDropDownModalToggle={handleDropDownModalToggle}
              >
                <DropDownModal.Button
                  name="수정하기"
                  size="lg"
                  variant="solid"
                  color="neutral"
                  onClick={handleReviewEditClick}
                >
                  수정하기
                </DropDownModal.Button>
                <DropDownModal.Button
                  name="삭제하기"
                  size="lg"
                  variant="solid"
                  color="neutral"
                  onClick={handleReviewDeleteClick}
                >
                  삭제하기
                </DropDownModal.Button>
              </DropDownModal>
            )}

            {isReviewModalVisible && (
              <ShortReviewModal
                key="ShortReviewModal"
                onClose={() => setIsReviewModalVisible(false)}
                onReview={() => setIsReviewModalVisible(false)}
                showBackdrop={false}
                userReviewData={{
                  reviewId,
                  animeId,
                  content,
                  isSpoiler,
                }}
              >
                <MyRating>내 별점</MyRating>
                <RatingContainer>
                  <Rating size="lg" onRate={handleRate} value={score} />
                </RatingContainer>
              </ShortReviewModal>
            )}

            {isDeleteModalVisible && (
              <ReviewDeleteModal
                reviewId={reviewId}
                animeId={animeId}
                onClose={() => setIsDeleteModalVisible(false)}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
