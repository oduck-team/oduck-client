import { AnimatePresence } from "framer-motion";

import { useScreenFix } from "@/hooks/useScreenFix";
import { StrictPropsWithChildren } from "@/types";

import Portal from "../Portal";

import { Backdrop, Container, Content, Header } from "./style";

export type Position = "top" | "right" | "bottom" | "left";

export interface DrawerProps {
  title?: React.ReactNode;
  isOpen?: boolean;
  showBackdrop?: boolean;
  position: Position;
  style?: React.CSSProperties;
  className?: string;
  onClose: () => void;
}

export default function Drawer({
  title,
  isOpen = false,
  showBackdrop = true,
  position,
  style,
  className = "",
  onClose,
  children,
}: StrictPropsWithChildren<DrawerProps>) {
  useScreenFix(isOpen);

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
              className={className}
              style={style}
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
