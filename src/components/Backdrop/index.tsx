import { StrictPropsWithChildren } from "@/types";

import { Container } from "./style";

export interface BackdropProps {
  readonly isVisible?: boolean;
  readonly className?: string;
}

export default function Backdrop({
  isVisible = true,
  className = "",
  children,
}: StrictPropsWithChildren<BackdropProps>) {
  return (
    <Container isVisible={isVisible} className={className}>
      {children}
    </Container>
  );
}
