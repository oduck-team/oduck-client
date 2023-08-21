import { AnimatePresence } from "framer-motion";

import { StrictPropsWithChildren } from "@/types";

import Backdrop from "../Backdrop";
import Portal from "../Portal";

import { Container } from "./style";

export type Size = "sm" | "md" | "lg" | "xl";

export interface ModalProps {
  readonly isOpened?: boolean;
  readonly size?: Size;
  readonly showBackdrop?: boolean;
  readonly onClose: () => void;
}

export default function Modal({
  isOpened = false,
  size = "sm",
  showBackdrop = true,
  onClose,
  children,
}: StrictPropsWithChildren<ModalProps>) {
  return (
    <AnimatePresence>
      {isOpened && (
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
