import { useTheme } from "@emotion/react";
import { DotsThree } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Button from "@/components/Button";
import Rating from "@/components/Rating";
import useSnackBar from "@/components/SnackBar/useSnackBar";
import DropDownModal from "@/features/users/components/DropDownModal";
import useDropDownModal from "@/features/users/components/DropDownModal/useDropDownModal";

import ShortReviewModal from "../ReviewRating/ShortReviewModal";

import { MyRating, RatingContainer } from "./ReviewMoreButton.style";

const USER_MOCK_DATA = { isMine: false };
const USER_MOCK_REVIEW_DATA = {
  score: 7,
  content: "유저가 생성한 짧은 리뷰입니다.",
  isSpoiler: true,
  character: true,
  art: true,
  story: false,
  voiceActing: false,
  sound: true,
};

export default function ReviewMoreButton() {
  const theme = useTheme();
  const { isDropDownModalOpen, handleDropDownModalToggle } = useDropDownModal();
  const snackBar = useSnackBar();
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const handleReviewEditClick = () => {
    handleDropDownModalToggle();
    setIsReviewModalVisible(true);
  };
  const handleRate = (value: number) => {
    // if (!isLoggedIn) {
    //   setIsLoginModalVisible(true);
    //   return;
    // }
    // TODO: 점수 등록 요청하기
    console.log(value);
  };
  const handleReviewDeleteClick = () => console.log("리뷰삭제");
  const handleReviewSpoilerReport = () => {
    handleDropDownModalToggle();
    snackBar?.open({ message: "신고가 접수되었습니다." });
  };
  const handleReviewEtcReport = () => {
    handleDropDownModalToggle();
    snackBar?.open({
      message: "신고가 접수되었습니다.",
    });
  };

  return (
    <>
      <Button
        name="더보기"
        icon={<DotsThree color={theme.colors.neutral["50"]} />}
        variant="text"
        size="sm"
        color="neutral"
        onClick={handleDropDownModalToggle}
      />
      <AnimatePresence>
        {isDropDownModalOpen && (
          <DropDownModal
            key="DropDownModal"
            onDropDownModalToggle={handleDropDownModalToggle}
          >
            <DropDownModal.Button
              name={USER_MOCK_DATA.isMine ? "수정하기" : "스포일러 신고"}
              size="lg"
              variant="solid"
              color="neutral"
              onClick={() =>
                USER_MOCK_DATA.isMine
                  ? handleReviewEditClick()
                  : handleReviewSpoilerReport()
              }
            >
              {USER_MOCK_DATA.isMine ? "수정하기" : "스포일러 신고"}
            </DropDownModal.Button>
            <DropDownModal.Button
              name={USER_MOCK_DATA.isMine ? "삭제하기" : "기타 신고"}
              size="lg"
              variant="solid"
              color="neutral"
              onClick={() =>
                USER_MOCK_DATA.isMine
                  ? handleReviewDeleteClick()
                  : handleReviewEtcReport()
              }
            >
              {USER_MOCK_DATA.isMine ? "삭제하기" : "기타 신고"}
            </DropDownModal.Button>
          </DropDownModal>
        )}

        {isReviewModalVisible && (
          <ShortReviewModal
            key="ShortReviewModal"
            onClose={() => setIsReviewModalVisible(false)}
            onReview={() => setIsReviewModalVisible(false)}
            userReviewData={USER_MOCK_REVIEW_DATA}
          >
            <MyRating>내 별점</MyRating>
            <RatingContainer>
              <Rating
                size="lg"
                onRate={handleRate}
                value={USER_MOCK_REVIEW_DATA.score}
              />
            </RatingContainer>
          </ShortReviewModal>
        )}
      </AnimatePresence>
    </>
  );
}
