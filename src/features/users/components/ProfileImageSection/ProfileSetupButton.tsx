import { useState } from "react";

import {
  ProfileSetupButtonContainer,
  Dot,
  Dots,
} from "./ProfileSetupButton.style";
import ProfileSetupModal from "./ProfileSetupModal";

export default function ProfileSetupButton() {
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  const handleSetupModalToggle = () => setIsSetupModalOpen((prev) => !prev);

  return (
    <>
      <ProfileSetupButtonContainer onClick={handleSetupModalToggle}>
        <Dots>
          <Dot />
          <Dot />
          <Dot />
        </Dots>
      </ProfileSetupButtonContainer>
      <ProfileSetupModal
        isVisible={isSetupModalOpen}
        onToggle={handleSetupModalToggle}
      />
    </>
  );
}
