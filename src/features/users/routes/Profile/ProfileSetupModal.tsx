import { Variants } from "framer-motion";

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
