import { Variants } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import AnimatePortal from "@/components/Portal/AnimatePortal";

import ProfileReportModal from "./ProfileReportModal";
import { Backdrop, ButtonContainer } from "./ProfileSetupModal.style";

export interface ProfileSetupModalProps {
  isSetupModalVisible: boolean;
  isMine: boolean;
  onSetupModalToggle: () => void;
}

export default function ProfileSetupModal({
  isSetupModalVisible,
  isMine,
  onSetupModalToggle,
}: ProfileSetupModalProps) {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const handleReportModalToggle = () => setIsReportModalOpen((prev) => !prev);
  const navigate = useNavigate();
  const handleLinkToEditClick = () => navigate("/profile/edit");
  const handleReportClick = () => {
    onSetupModalToggle();
    handleReportModalToggle();
  };

  return (
    <>
      <AnimatePortal isVisible={isSetupModalVisible}>
        <Backdrop onClick={onSetupModalToggle} />
        {/* 애니메이션 props: variants, animate, exit */}
        <ButtonContainer variants={variants} animate="animate" exit="exit">
          <Button
            name="프로필 링크 복사"
            size="lg"
            variant="solid"
            color="neutral"
          >
            프로필 링크 복사
          </Button>
          <Button
            name={isMine ? "프로필 수정" : "신고하기"}
            size="lg"
            variant="solid"
            color="neutral"
            onClick={() =>
              isMine ? handleLinkToEditClick() : handleReportClick()
            }
          >
            {isMine ? "프로필 수정" : "신고하기"}
          </Button>
          <Button
            name="취소"
            size="lg"
            variant="text"
            color="warn"
            onClick={onSetupModalToggle}
          >
            취소
          </Button>
        </ButtonContainer>
      </AnimatePortal>
      <ProfileReportModal
        isVisible={isReportModalOpen}
        onClose={handleReportModalToggle}
      />
    </>
  );
}

const variants: Variants = {
  animate: {
    opacity: 1,
    bottom: [32, 66],
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    bottom: 32,
  },
};
