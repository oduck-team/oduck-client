import { Variants } from "framer-motion";

import Button from "@/components/Button";
import Portal from "@/components/Portal";
import useScrollLock from "@/hooks/useScrollLock";
import { StrictPropsWithChildren } from "@/types";

import { ButtonContainer, Backdrop } from "./style";

export interface DropDownModalProps {
  onDropDownModalToggle: () => void;
}

export default function DropDownModal({
  onDropDownModalToggle,
  children,
}: StrictPropsWithChildren<DropDownModalProps>) {
  useScrollLock(true);

  return (
    <Portal>
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
    </Portal>
  );
}

DropDownModal.Button = Button;

const variants: Variants = {
  animate: {
    opacity: 1,
    bottom: [4, 12],
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    bottom: 4,
  },
};
