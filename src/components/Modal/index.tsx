import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { StrictPropsWithChildren } from "@/types";

import Backdrop from "../Backdrop";
import Portal from "../Portal";

import { Container } from "./style";

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
  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute("style", "overflow: hidden");

      return () => {
        document.body.removeAttribute("style");
      };
    }
  }, [isOpen]);
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
