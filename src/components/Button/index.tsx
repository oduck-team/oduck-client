import { ComponentProps } from "react";

import { theme } from "@/styles/theme";

import { Container } from "./style";

export type Style = "solid" | "outline" | "text";
export type Color = keyof Pick<typeof theme.colors, ColorKeys>;
type ColorKeys = "primary" | "neutral" | "warn";
export type Size = "lg" | "md" | "sm";

export interface ButtonProps extends ComponentProps<"button"> {
  readonly styleType?: Style;
  readonly color?: Color;
  readonly size?: Size;
}

export default function Button({
  styleType = "solid",
  color = "primary",
  size = "md",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <Container
      styleType={styleType}
      color={color}
      size={size}
      type={type}
      {...props}
    >
      {children}
    </Container>
  );
}
