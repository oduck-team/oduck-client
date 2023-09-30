import { SelectableChipContainer } from "./SelectableChip.style";

import { ChipProps } from ".";

export default function SelectableChip({
  size,
  active = false,
  className,
  children,
  onClick,
}: Omit<ChipProps, "variant" | "icon">) {
  return (
    <SelectableChipContainer
      size={size}
      active={active}
      className={className}
      onClick={onClick}
    >
      {children}
    </SelectableChipContainer>
  );
}
