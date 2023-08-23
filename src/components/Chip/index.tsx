import { ComponentProps } from "react";

import ActionChip from "./ActionChip";
import FilterChip from "./FilterChip";
import SelectableChip from "./SelectableChip";

export type ChipType = "action" | "selectable" | "filter";

export interface ChipProps extends ComponentProps<"button"> {
  styleType?: ChipType;
  active?: boolean;
  icon?: React.ReactNode;
}

export default function Chip({
  styleType = "action",
  active,
  icon,
  className,
  children,
  onClick,
}: ChipProps) {
  if (styleType === "selectable")
    return (
      <SelectableChip active={active} onClick={onClick} className={className}>
        {children}
      </SelectableChip>
    );
  else if (styleType === "filter")
    return (
      <FilterChip
        active={active}
        icon={icon}
        onClick={onClick}
        className={className}
      >
        {children}
      </FilterChip>
    );

  return (
    <ActionChip onClick={onClick} className={className}>
      {children}
    </ActionChip>
  );
}
