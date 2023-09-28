import { useState } from "react";

import ProfileSetupModal from "../routes/Profile/ProfileSetupModal";

import { ButtonContainer, Dot, Dots } from "./ProfileSetupButton.style";

export default function ProfileSetupButton() {
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  const handleSetupModalToggle = () => setIsSetupModalOpen((prev) => !prev);

  return (
    <>
      <ButtonContainer onClick={handleSetupModalToggle}>
        <Dots>
          <Dot />
          <Dot />
          <Dot />
        </Dots>
      </ButtonContainer>
      <ProfileSetupModal
        isVisible={isSetupModalOpen}
        onToggle={handleSetupModalToggle}
      />
    </>
  );
}
