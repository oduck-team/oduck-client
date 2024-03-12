import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BackdropPortal from "@/components/Backdrop/BackdropPortal";
import useToast from "@/components/Toast/useToast";

import DropDownModal from "../DropDownModal";
import useDropDownModal from "../DropDownModal/useDropDownModal";

import ProfileReportModal from "./ProfileReportModal";
import {
  ProfileSetupButtonContainer,
  Dot,
  Dots,
} from "./ProfileSetupButton.style";

interface ProfileSetupButtonProps {
  isMine: boolean;
  userName: string;
}

export default function ProfileSetupButton({
  isMine,
  userName,
}: ProfileSetupButtonProps) {
  const { isDropDownModalOpen, handleDropDownModalToggle } = useDropDownModal();
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const handleReportModalToggle = () => setIsReportModalOpen((prev) => !prev);
  const navigate = useNavigate();
  const toast = useToast();
  const handleLinkToEditClick = () => navigate("/profile/edit");
  const handleProfileLinkCopyClick = () => {
    window.navigator.clipboard //
      .writeText(`https://oduck.io/users/${userName}`)
      .then(
        () => toast.success({ message: "링크가 복사되었어요." }),
        () => toast.error({ message: "링크 복사에 실패했어요." }),
      );
  };
  const handleReportClick = () => {
    handleDropDownModalToggle();
    handleReportModalToggle();
  };
  const handleBackdropClick = () => {
    if (isDropDownModalOpen) handleDropDownModalToggle();
    if (isReportModalOpen) handleReportModalToggle();
  };

  return (
    <>
      <ProfileSetupButtonContainer onClick={handleDropDownModalToggle}>
        <Dots>
          <Dot />
          <Dot />
          <Dot />
        </Dots>
      </ProfileSetupButtonContainer>

      <AnimatePresence>
        {(isDropDownModalOpen || isReportModalOpen) && (
          <BackdropPortal onClick={handleBackdropClick} />
        )}

        {isDropDownModalOpen && (
          <DropDownModal
            key="DropDownModal"
            onDropDownModalToggle={handleDropDownModalToggle}
          >
            <DropDownModal.Button
              name="프로필 링크 복사"
              size="lg"
              variant="solid"
              color="neutral"
              onClick={handleProfileLinkCopyClick}
            >
              프로필 링크 복사
            </DropDownModal.Button>
            <DropDownModal.Button
              name={isMine ? "프로필 수정" : "신고하기"}
              size="lg"
              variant="solid"
              color="neutral"
              onClick={() =>
                isMine ? handleLinkToEditClick() : handleReportClick()
              }
            >
              {isMine ? "프로필 수정" : "신고하기"}
            </DropDownModal.Button>
          </DropDownModal>
        )}

        {isReportModalOpen && (
          <ProfileReportModal
            key="ProfileReportModal"
            onClose={handleReportModalToggle}
          />
        )}
      </AnimatePresence>
    </>
  );
}
