import { StrictPropsWithChildren } from "@/types";

import Portal from "../Portal";

import { Backdrop, Container, Header, Content, Footer } from "./style";

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
  if (!isOpen) return null;

  return (
    <Portal elementId="modal-root">
      <Backdrop isVisible={showBackdrop} onClick={onClose}>
        <Container>
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
  );
}
