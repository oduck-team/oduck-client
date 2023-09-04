import { AnimatePresence } from "framer-motion";

import { useScreenFix } from "@/hooks/useScreenFix";
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
  useScreenFix(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal elementId="modal-root">
          <Backdrop isVisible={showBackdrop} onClick={onClose}>
            <Container size={size} onClick={(e) => e.stopPropagation()}>
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
