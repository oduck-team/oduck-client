import useScrollLock from "@/hooks/useScrollLock";
import { StrictPropsWithChildren } from "@/types";

import AnimatePortal from "../Portal/AnimatePortal";

import { Backdrop, DrawerContainer, Content, Header } from "./style";
import { useDrawer, Side } from "./useDrawer";

const sides = {
  top: "translate3d(0,-100%,0)",
  bottom: "translate3d(0,100%,0)",
  left: "translate3d(-100%,0,0)",
  right: "translate3d(100%,0,0)",
} as const;

export interface DrawerProps {
  title?: React.ReactNode;
  isVisible?: boolean;
  showBackdrop?: boolean;
  side: Side;
  style?: React.CSSProperties;
  className?: string;
  onClose: () => void;
}

export default function Drawer({
  title,
  isVisible = false,
  showBackdrop = true,
  side,
  style,
  className = "",
  onClose,
  children,
}: StrictPropsWithChildren<DrawerProps>) {
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useDrawer(
    side,
    onClose,
  );
  useScrollLock(isVisible);

  return (
    <AnimatePortal isVisible={isVisible}>
      <Backdrop isVisible={showBackdrop} onClick={onClose} />
      <DrawerContainer
        aria-modal={isVisible}
        role="dialog"
        side={side}
        initial={{ transform: sides[side] }}
        exit={{ transform: sides[side] }}
        animate={{
          transform: "translate3d(0,0,0)",
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
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
      </DrawerContainer>
    </AnimatePortal>
  );
}
