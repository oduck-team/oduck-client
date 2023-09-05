import { AnimatePresence, Variants } from "framer-motion";

import { useScrollLock } from "@/hooks/useScrollLock";
import { StrictPropsWithChildren } from "@/types";

import Portal from "../Portal";

import {
  ActionsContainer,
  Backdrop,
  Container,
  ContentContainer,
} from "./style";

export type Size = "sm" | "md" | "lg" | "xl";

export interface ModalProps {
  isOpen?: boolean;
  size?: Size;
  showBackdrop?: boolean;
  onClose: () => void;
}

export default function Modal({
  isOpen = false,
  size = "sm",
  showBackdrop = true,
  onClose,
  children,
}: StrictPropsWithChildren<ModalProps>) {
  useScrollLock(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal elementId="modal-root">
          <Backdrop isVisible={showBackdrop} onClick={onClose}>
            <Container
              size={size}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={varitends}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </Container>
          </Backdrop>
        </Portal>
      )}
    </AnimatePresence>
  );
}

Modal.Content = Content;
Modal.Actions = Actions;

const varitends: Variants = {
  initial: {
    opacity: 0,
    y: "30%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  animate: {
    opacity: 1,
    y: "0px",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

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
