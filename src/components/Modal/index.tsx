import { AnimatePresence } from "framer-motion";

import { useScreenFix } from "@/hooks/useScreenFix";
import { StrictPropsWithChildren } from "@/types";

import Portal from "../Portal";

import { Backdrop, Container } from "./style";

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
