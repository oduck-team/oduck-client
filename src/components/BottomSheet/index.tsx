import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { StrictPropsWithChildren } from "@/types";

import Portal from "../Portal";

import { Backdrop, Container, Header, Content, Footer } from "./style";

const variants = {
  hidden: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export interface BottomSheetProps {
  readonly isOpen?: boolean;
  readonly showBackdrop?: boolean;
  readonly header?: {
    left?: React.ReactNode;
    title?: string;
    right?: React.ReactNode;
  };
  readonly footer?: React.ReactNode;
  readonly onClose: () => void;
}

export default function BottomSheet({
  isOpen = false,
  showBackdrop = true,
  header,
  footer,
  onClose,
  children,
}: StrictPropsWithChildren<BottomSheetProps>) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: auto;
        width: 100%;`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      };
    }
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <Portal elementId="modal-root">
          <Backdrop isVisible={showBackdrop} onClick={onClose}>
            <Container
              aria-modal={isOpen}
              role="dialog"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              {header && (
                <Header>
                  <div className="left">{header.left}</div>
                  <div className="center">{header.title}</div>
                  <div className="right">{header.right}</div>
                </Header>
              )}
              <Content>{children}</Content>
              {footer && <Footer>{footer}</Footer>}
            </Container>
          </Backdrop>
        </Portal>
      )}
    </AnimatePresence>
  );
}
