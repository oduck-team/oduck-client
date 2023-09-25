import { ComponentProps } from "react";

import { Container } from "./ActionChip.style";

import { Size } from ".";

export interface ActionChipProps extends ComponentProps<"button"> {
  size: Size;
}

export default function ActionChip({
  size,
  className,
  children,
  onClick,
}: ActionChipProps) {
  return (
    <Container size={size} className={className} onClick={onClick}>
      {children}
    </Container>
  );
}
