import { Variants } from "framer-motion";

import useScrollLock from "@/hooks/useScrollLock";
import { StrictPropsWithChildren } from "@/types";

import AnimatePortal from "../Portal/AnimatePortal";

import { useDrawer, Position } from "./hooks/useDrawer";
import { Backdrop, Container, Content, Header } from "./style";

export interface DrawerProps {
  title?: React.ReactNode;
  isVisible?: boolean;
  showBackdrop?: boolean;
  position: Position;
  style?: React.CSSProperties;
  className?: string;
  onClose: () => void;
}

export default function Drawer({
  title,
  isVisible = false,
  showBackdrop = true,
  position,
  style,
  className = "",
  onClose,
  children,
}: StrictPropsWithChildren<DrawerProps>) {
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useDrawer(
    position,
    onClose,
  );
  useScrollLock(isVisible);

  return (
    <AnimatePortal isVisible={isVisible}>
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Header>{title}</Header>
          <Content>{children}</Content>
        </Container>
      </Backdrop>
    </AnimatePortal>
  );
}

const variants: Record<Position, Variants> = {
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
