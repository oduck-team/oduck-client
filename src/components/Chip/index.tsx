import { ComponentProps } from "react";

import ActionChip from "./ActionChip";
import FilterChip from "./FilterChip";
import SelectableChip from "./SelectableChip";

export type Variant = "action" | "selectable" | "filter";
export type Size = "sm" | "md" | "lg";

export interface ChipProps extends ComponentProps<"button"> {
  variant?: Variant;
  active?: boolean;
  icon?: React.ReactNode;
  size?: Size;
}
// TODO: size를 옵션으로 받기
export default function Chip({
  variant = "action",
  active,
  icon,
  size = "md",
  className,
  children,
  onClick,
}: ChipProps) {
  if (variant === "selectable")
    return (
      <SelectableChip
        size={size}
        active={active}
        onClick={onClick}
        className={className}
      >
        {children}
      </SelectableChip>
    );
  else if (variant === "filter")
    return (
      <FilterChip
        size={size}
        active={active}
        icon={icon}
        onClick={onClick}
        className={className}
      >
        {children}
      </FilterChip>
    );

  return (
    <ActionChip size={size} onClick={onClick} className={className}>
      {children}
    </ActionChip>
  );
}
