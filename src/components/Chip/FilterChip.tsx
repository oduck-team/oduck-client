import { Container } from "./FilterChip.style";

import { ChipProps } from ".";

export default function FilterChip({
  active = false,
  icon,
  className,
  children,
  onClick,
}: Omit<ChipProps, "styleType">) {
  return (
    <Container
      active={active}
      icon={icon}
      className={className}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && icon}
    </Container>
  );
}
