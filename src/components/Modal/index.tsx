import { Variants } from "framer-motion";

import useScrollLock from "@/hooks/useScrollLock";
import { StrictPropsWithChildren } from "@/types";

import Portal from "../Portal";

import ModalActions from "./ModalActions";
import ModalContent from "./ModalContent";
import { Backdrop, ModalContainer } from "./style";

export type Size = "default" | "sm" | "md" | "lg" | "xl";

export interface ModalProps {
  isVisible?: boolean;
  /**
   * @desc "default"는 viewport width 사이즈를 가집니다.
   * @desc "sm | md | lg | xl"은 고정 width 사이즈를 가집니다.
   */
  size?: Size;
  showBackdrop?: boolean;
  onClose: () => void;
}

/** @desc < AnimatePresence > 컴포넌트로 감싸서 사용해주세요. */
export default function Modal({
  isVisible = true,
  size = "default",
  showBackdrop = true,
  onClose,
  children,
}: StrictPropsWithChildren<ModalProps>) {
  useScrollLock(isVisible);

  return (
    <Portal>
      <Backdrop isVisible={showBackdrop} onClick={onClose} />
      <ModalContainer
        aria-modal={isVisible}
        role="dialog"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={modalVariants}
        size={size}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </ModalContainer>
    </Portal>
  );
}

const modalVariants: Variants = {
  initial: {
    opacity: 0,
    left: "50%",
    transform: "translateY(0) translateX(-50%)",
  },
  animate: {
    opacity: 1,
    left: "50%",
    transform: "translateY(-50%) translateX(-50%)",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
};

Modal.Content = ModalContent;
Modal.Actions = ModalActions;
