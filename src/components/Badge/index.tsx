import { ComponentProps } from "react";

import { theme } from "@/styles/theme";

import { Container, DotBadge } from "./style";

type Variant = "fill" | "inverted";
type Color = keyof typeof theme.colors;

export interface BadgeProps extends ComponentProps<"span"> {
  /**
   * true일 경우 단순한 점 뱃지 컴포넌트가 됩니다
   */
  isDot?: boolean;
  variant?: Variant;
  color?: Color;
  count?: number;
  /**
   * count가 오버플로우로 처리되는 수입니다
   * @default 99
   */
  overflowCount?: number;
}

export default function Badge({
  count = 0,
  isDot = false,
  variant = "fill",
  color = "primary",
  overflowCount = 99,
}: BadgeProps) {
  if (isDot) return <DotBadge color={color}></DotBadge>;

  const displayCount = count > overflowCount ? `${overflowCount}+` : `${count}`;

  return (
    <Container variant={variant} color={color} aria-label={displayCount}>
      {displayCount}
    </Container>
  );
}
