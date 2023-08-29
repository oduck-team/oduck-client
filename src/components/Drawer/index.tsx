import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { StrictPropsWithChildren } from "@/types";

import Portal from "../Portal";

import { Backdrop, Container, Content, Header } from "./style";

export type Position = "top" | "right" | "bottom" | "left";

export interface DrawerProps {
  readonly title?: React.ReactNode;
  readonly isOpen?: boolean;
  readonly showBackdrop?: boolean;
  readonly position: Position;
  readonly onClose: () => void;
}

const variants = {
  top: {
    hidden: { y: "-100%" },
    visible: { y: "0px" },
  },
  bottom: {
    hidden: { y: "100%" },
    visible: { y: "0" },
  },
  left: {
    hidden: { x: "-100%" },
    visible: { x: "0px" },
  },
  right: {
    hidden: { x: "100%" },
    visible: { x: "0px" },
  },
};

export default function Drawer({
  title,
  isOpen = false,
  showBackdrop = true,
  position,
  onClose,
  children,
}: StrictPropsWithChildren<DrawerProps>) {
  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute(
        "style",
        "position:relative; overflow: hidden;",
      );

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
            <Container
              position={position}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants[position]}
              transition={{
                type: "springs",
                tiffness: 300,
                damping: 30,
                duration: 0.15,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Header>{title}</Header>
              <Content>{children}</Content>
            </Container>
          </Backdrop>
        </Portal>
      )}
    </AnimatePresence>
  );
}
