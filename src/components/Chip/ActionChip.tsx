import { ComponentProps } from "react";

import { Container } from "./ActionChip.style";

export default function ActionChip({
  className,
  children,
  onClick,
}: ComponentProps<"button">) {
  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  );
}
