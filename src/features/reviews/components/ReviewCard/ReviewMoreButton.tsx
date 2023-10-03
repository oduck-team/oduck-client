import { useTheme } from "@emotion/react";
import { DotsThree } from "@phosphor-icons/react";

import Button from "@/components/Button";
import SnackBar from "@/components/SnackBar";
import useSnackBar from "@/components/SnackBar/useSnackBar";
import DropDownModal from "@/features/users/components/DropDownModal";
import useDropDownModal from "@/features/users/components/DropDownModal/hooks/useDropDownModal";

const USER_MOCK_DATA = { isMine: false };

export default function ReviewMoreButton() {
  const theme = useTheme();
  const { isDropDownModalOpen, handleDropDownModalToggle } = useDropDownModal();
  const { isSnackBarOpen, openSnackBar, removeSnackBarAfter } = useSnackBar();
  const handleReviewEditClick = () => console.log("리뷰수정");
  const handleReviewDeleteClick = () => console.log("리뷰삭제");
  const handleReviewSpoilerReport = () => {
    handleDropDownModalToggle();
    openSnackBar();
    removeSnackBarAfter(2000);
  };
  const handleReviewEtcReport = () => {
    handleDropDownModalToggle();
    openSnackBar();
    removeSnackBarAfter(2000);
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
      <DropDownModal
        isVisible={isDropDownModalOpen}
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
      {isSnackBarOpen && <SnackBar text="신고가 접수되었습니다" />}
    </>
  );
}
