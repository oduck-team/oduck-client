import { ComponentProps } from "react";

import ActionChip from "./ActionChip";
import FilterChip from "./FilterChip";
import SelectableChip from "./SelectableChip";

export type ChipType = "action" | "selectable" | "filter";
export type ChipSize = "sm" | "md" | "lg";

export interface ChipProps extends ComponentProps<"button"> {
  styleType?: ChipType;
  active?: boolean;
  icon?: React.ReactNode;
  size?: ChipSize;
}
// TODO: size를 옵션으로 받기
export default function Chip({
  styleType = "action",
  active,
  icon,
  size = "md",
  className,
  children,
  onClick,
}: ChipProps) {
  if (styleType === "selectable")
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
  else if (styleType === "filter")
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
