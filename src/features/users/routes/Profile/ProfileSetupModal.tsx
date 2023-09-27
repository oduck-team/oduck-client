import Button from "@/components/Button";
import AnimatePortal from "@/components/Portal/AnimatePortal";

import { Backdrop, ButtonContainer } from "./ProfileSetupModal.style";

export interface ProfileSetupModalProps {
  isVisible: boolean;
  onToggle: () => void;
}

export default function ProfileSetupModal({
  isVisible,
  onToggle,
}: ProfileSetupModalProps) {
  return (
    <AnimatePortal isVisible={isVisible}>
      <Backdrop onClick={onToggle} />
      <ButtonContainer>
        <Button
          name="프로필 링크 복사"
          size="lg"
          variant="solid"
          color="neutral"
        >
          프로필 링크 복사
        </Button>
        <Button name="프로필 수정" size="lg" variant="solid" color="neutral">
          프로필 수정
        </Button>
        <Button
          name="취소"
          size="lg"
          variant="text"
          color="warn"
          onClick={onToggle}
        >
          취소
        </Button>
      </ButtonContainer>
    </AnimatePortal>
  );
}
