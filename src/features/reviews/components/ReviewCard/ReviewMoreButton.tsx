import { useTheme } from "@emotion/react";
import { DotsThree } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import BackdropPortal from "@/components/Backdrop/BackdropPortal";
import Rating from "@/components/Rating";
import useSnackBar from "@/components/SnackBar/useSnackBar";
import useToast from "@/components/Toast/useToast";
import DropDownModal from "@/features/users/components/DropDownModal";
import useDropDownModal from "@/features/users/components/DropDownModal/useDropDownModal";

import useEvaluation from "../../hook/useEvaluation";
import ShortReviewModal from "../ReviewRating/ShortReviewModal";

import {
  MoreButton,
  MyRating,
  RatingContainer,
} from "./ReviewMoreButton.style";

// TODO: 서버에서 가져오기
const USER_MOCK_ATTRACTION = {
  character: true,
  art: true,
  story: false,
  voiceActing: false,
  sound: true,
};

interface ReviewMoreButtonProps {
  isMine: boolean;
  reviewId: number;
  animeId: number;
  content: string;
  isSpoiler: boolean;
  score: number;
}

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
  const snackBar = useSnackBar();
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);

  const evaluationMutation = useEvaluation(animeId);

  const toast = useToast();

  const handleReviewModalToggle = () =>
    setIsReviewModalVisible((prev) => !prev);

  const handleReviewEditClick = () => {
    handleDropDownModalToggle();
    handleReviewModalToggle();
  };

  const handleRate = (value: number) => {
    evaluationMutation.mutate(
      { score: value },
      {
        onSuccess: () => {
          toast.success({ message: "평점이 수정되었어요." });
        },
      },
    );
    console.log(value);
  };

  const handleReviewDeleteClick = () => console.log("리뷰삭제");

  const handleReviewSpoilerReport = () => {
    handleDropDownModalToggle();
    snackBar.open({ message: "신고가 접수되었어요." });
  };

  const handleReviewEtcReport = () => {
    handleDropDownModalToggle();
    snackBar.open({
      message: "신고가 접수되었어요.",
    });
  };

  const handleBackdropClick = () => {
    if (isDropDownModalOpen) handleDropDownModalToggle();
    if (isReviewModalVisible) handleReviewModalToggle();
  };

  return (
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
              name={isMine ? "수정하기" : "스포일러 신고"}
              size="lg"
              variant="solid"
              color="neutral"
              onClick={() =>
                isMine ? handleReviewEditClick() : handleReviewSpoilerReport()
              }
            >
              {isMine ? "수정하기" : "스포일러 신고"}
            </DropDownModal.Button>
            <DropDownModal.Button
              name={isMine ? "삭제하기" : "기타 신고"}
              size="lg"
              variant="solid"
              color="neutral"
              onClick={() =>
                isMine ? handleReviewDeleteClick() : handleReviewEtcReport()
              }
            >
              {isMine ? "삭제하기" : "기타 신고"}
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
              ...USER_MOCK_ATTRACTION,
            }}
          >
            <MyRating>내 별점</MyRating>
            <RatingContainer>
              <Rating size="lg" onRate={handleRate} value={score} />
            </RatingContainer>
          </ShortReviewModal>
        )}
      </AnimatePresence>
    </>
  );
}
