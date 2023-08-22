import { Container } from "./SelectableChip.style";

import { ChipProps } from ".";

export default function SelectableChip({
  active = false,
  className,
  children,
  onClick,
}: Omit<ChipProps, "styleType" | "icon">) {
  return (
    <Container className={className} active={active} onClick={onClick}>
      {children}
    </Container>
  );
}
