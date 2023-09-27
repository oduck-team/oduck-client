import { useState } from "react";

// import Backdrop from "@/components/Backdrop";

import { ButtonContainer, Dot, Dots, Backdrop } from "./ProfileButton.style";

export default function ProfileButton() {
  const [selectButtonModal, setSelectButtonModal] = useState(false);
  const handleProfileSetToggle = () => setSelectButtonModal((prev) => !prev);
  return (
    <>
      <ButtonContainer onClick={handleProfileSetToggle}>
        <Dots>
          <Dot />
          <Dot />
          <Dot />
        </Dots>
      </ButtonContainer>

      <Backdrop
        isVisible={selectButtonModal}
        onClick={handleProfileSetToggle}
      />
    </>
  );
}
