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

export default function Drawer({
  title,
  isOpen = false,
  showBackdrop = true,
  position,
  onClose,
  children,
}: StrictPropsWithChildren<DrawerProps>) {
  if (!isOpen) return null;
  return (
    <Portal elementId="modal-root">
      <Backdrop isVisible={showBackdrop} onClick={onClose}>
        <Container position={position} onClick={(e) => e.stopPropagation()}>
          <Header>{title}</Header>
          <Content>{children}</Content>
        </Container>
      </Backdrop>
    </Portal>
  );
}
