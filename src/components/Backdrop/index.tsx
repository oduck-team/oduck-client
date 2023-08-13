import { StrictPropsWithChildren } from "@/types";

import { Container } from "./style";

export interface BackdropProps {
  readonly isVisible?: boolean;
  readonly className?: string;
  readonly onClick: () => void;
}

export default function Backdrop({
  isVisible = true,
  className = "",
  onClick,
  children,
}: StrictPropsWithChildren<BackdropProps>) {
  return (
    <Container isVisible={isVisible} className={className} onClick={onClick}>
      {children}
    </Container>
  );
}
