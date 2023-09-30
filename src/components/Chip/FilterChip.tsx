import { FilterChipContainer } from "./FilterChip.style";

import { ChipProps } from ".";

export default function FilterChip({
  size,
  active = false,
  icon,
  className,
  children,
  onClick,
}: Omit<ChipProps, "variant">) {
  return (
    <FilterChipContainer
      size={size}
      active={active}
      icon={icon}
      className={className}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && icon}
    </FilterChipContainer>
  );
}
