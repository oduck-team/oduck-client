import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DropDownModal from "../DropDownModal";
import useDropDownModal from "../DropDownModal/hooks/useDropDownModal";

import ProfileReportModal from "./ProfileReportModal";
import {
  ProfileSetupButtonContainer,
  Dot,
  Dots,
} from "./ProfileSetupButton.style";

interface ProfileSetupButtonProps {
  isMine: boolean;
}

export default function ProfileSetupButton({
  isMine,
}: ProfileSetupButtonProps) {
  const { isDropDownModalOpen, handleDropDownModalToggle } = useDropDownModal();
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const handleReportModalToggle = () => setIsReportModalOpen((prev) => !prev);
  const navigate = useNavigate();
  const handleLinkToEditClick = () => navigate("/profile/edit");
  const handleReportClick = () => {
    handleDropDownModalToggle();
    handleReportModalToggle();
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
      <DropDownModal
        isVisible={isDropDownModalOpen}
        onDropDownModalToggle={handleDropDownModalToggle}
      >
        <DropDownModal.Button
          name="프로필 링크 복사"
          size="lg"
          variant="solid"
          color="neutral"
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
      <ProfileReportModal
        isVisible={isReportModalOpen}
        onClose={handleReportModalToggle}
      />
    </>
  );
}
