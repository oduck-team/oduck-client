import { ComponentProps } from "react";

import { theme } from "@/styles/theme";

import { Container, ContentWrapper, IconWrapper, IconButton } from "./style";

export type Variant = "solid" | "outline" | "text";
export type Color = keyof Pick<typeof theme.colors, ColorKeys>;
type ColorKeys = "primary" | "neutral" | "warn";
export type Size = "xl" | "lg" | "md" | "sm";

export interface ButtonProps extends ComponentProps<"button"> {
  name: string;
  variant?: Variant;
  color?: Color;
  size?: Size;
  isBlock?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  name,
  variant = "solid",
  color = "primary",
  size = "md",
  type = "button",
  isBlock = false,
  icon,
  children,
  ...props
}: ButtonProps) {
  const isIconOnly = icon !== undefined && !children;
  if (isIconOnly) {
    return (
      <IconButton
        aria-label={name}
        variant={variant}
        color={color}
        size={size}
        type={type}
        {...props}
      >
        <IconWrapper>{icon}</IconWrapper>
      </IconButton>
    );
  }

  return (
    <Container
      aria-label={name}
      variant={variant}
      color={color}
      size={size}
      type={type}
      isBlock={isBlock}
      {...props}
    >
      <ContentWrapper>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <span>{children}</span>
      </ContentWrapper>
    </Container>
  );
}
