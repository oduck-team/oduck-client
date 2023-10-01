import { useState } from "react";

import {
  ProfileSetupButtonContainer,
  Dot,
  Dots,
} from "./ProfileSetupButton.style";
import ProfileSetupModal from "./ProfileSetupModal";

interface ProfileSetupButtonProps {
  isMine: boolean;
}

export default function ProfileSetupButton({
  isMine,
}: ProfileSetupButtonProps) {
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
        isSetupModalVisible={isSetupModalOpen}
        isMine={isMine}
        onSetupModalToggle={handleSetupModalToggle}
      />
    </>
  );
}
