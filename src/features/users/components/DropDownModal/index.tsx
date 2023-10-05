import { Variants } from "framer-motion";

import Button from "@/components/Button";
import AnimatePortal from "@/components/Portal/AnimatePortal";
import { StrictPropsWithChildren } from "@/types";

import { ButtonContainer, Backdrop } from "./style";

export interface DropDownModalProps {
  isVisible: boolean;
  onDropDownModalToggle: () => void;
}

export default function DropDownModal({
  isVisible,
  onDropDownModalToggle,
  children,
}: StrictPropsWithChildren<DropDownModalProps>) {
  return (
    <AnimatePortal isVisible={isVisible}>
      <Backdrop onClick={onDropDownModalToggle} />
      {/* 애니메이션 props: variants, animate, exit */}
      <ButtonContainer variants={variants} animate="animate" exit="exit">
        {children}
        <Button
          name="취소"
          size="lg"
          variant="text"
          color="warn"
          onClick={onDropDownModalToggle}
        >
          취소
        </Button>
      </ButtonContainer>
    </AnimatePortal>
  );
}

DropDownModal.Button = Button;

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
