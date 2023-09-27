import { useState } from "react";

import { ButtonContainer, Dot, Dots } from "./ProfileButton.style";
import ProfileSetupModal from "./ProfileSetupModal";

export default function ProfileButton() {
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
