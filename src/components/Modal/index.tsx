import { Variants } from "framer-motion";

import useScrollLock from "@/hooks/useScrollLock";
import { StrictPropsWithChildren } from "@/types";

import AnimatePortal from "../Portal/AnimatePortal";

import {
  ActionsContainer,
  Backdrop,
  Container,
  ContentContainer,
} from "./style";

export type Size = "sm" | "md" | "lg" | "xl";

export interface ModalProps {
  isVisible?: boolean;
  size?: Size;
  showBackdrop?: boolean;
  onClose: () => void;
}

export default function Modal({
  isVisible = false,
  size = "sm",
  showBackdrop = true,
  onClose,
  children,
}: StrictPropsWithChildren<ModalProps>) {
  useScrollLock(isVisible);

  return (
    <AnimatePortal isVisible={isVisible}>
      <Backdrop isVisible={showBackdrop} onClick={onClose} />
      <Container
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
      </Container>
    </AnimatePortal>
  );
}

const modalVariants: Variants = {
  initial: {
    opacity: 0,
    left: "50%",
    transform: "scale(0.97) translateX(-50%)",
  },
  animate: {
    opacity: 1,
    left: "50%",
    transform: "scale(1) translateX(-50%)",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    left: "50%",
    transform: "scale(0.97) translateX(-50%)",
  },
};

Modal.Content = Content;
Modal.Actions = Actions;

// =================================== Content ===================================
/**
 * @description 모달에 들어갈 컨텐츠
 */
function Content({ children }: StrictPropsWithChildren) {
  return <ContentContainer>{children}</ContentContainer>;
}

// =================================== Actions ===================================
type Direction = "row" | "col";

export interface ModalActionsProps {
  /**
   * 정렬 방향
   * @default row
   */
  direction?: Direction;
}

/**
 * @description 모달에 들어갈 액션들. 확인, 닫기 버튼 등
 */
function Actions({
  direction = "row",
  children,
}: StrictPropsWithChildren<ModalActionsProps>) {
  return <ActionsContainer direction={direction}>{children}</ActionsContainer>;
}
