import { ComponentProps } from "react";

import { theme } from "@/styles/theme";

import { Container, DotBadge } from "./style";

type BadgeStyle = "fill" | "inverted";
type BadgeColor = keyof typeof theme.colors;

export interface BadgeProps extends ComponentProps<"span"> {
  readonly isDot?: boolean;
  readonly styleType?: BadgeStyle;
  readonly color?: BadgeColor;
  readonly count?: number;
  readonly overflowCount?: number;
}

export default function Badge({
  count = 0,
  isDot = false,
  styleType = "fill",
  color = "primary",
  overflowCount = 99,
}: BadgeProps) {
  if (isDot) return <DotBadge color={color}></DotBadge>;

  const displayCount = count > overflowCount ? `${overflowCount}+` : `${count}`;

  return (
    <Container styleType={styleType} color={color} aria-label={displayCount}>
      {displayCount}
    </Container>
  );
}
