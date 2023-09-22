import { ComponentProps } from "react";

import { Container } from "./ActionChip.style";

import { ChipSize } from ".";

export interface ActionChipProps extends ComponentProps<"button"> {
  size: ChipSize;
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
