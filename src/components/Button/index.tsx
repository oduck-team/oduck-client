import { ComponentProps } from "react";

import { theme } from "@/styles/theme";

import { Container, ContentWrapper, IconWrapper, IconButton } from "./style";

export type Style = "solid" | "outline" | "text";
export type Color = keyof Pick<typeof theme.colors, ColorKeys>;
type ColorKeys = "primary" | "neutral" | "warn";
export type Size = "xl" | "lg" | "md" | "sm";

export interface ButtonProps extends ComponentProps<"button"> {
  readonly name: string;
  readonly styleType?: Style;
  readonly color?: Color;
  readonly size?: Size;
  readonly isBlock?: boolean;
  readonly icon?: React.ReactNode;
}

export default function Button({
  name,
  styleType = "solid",
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
        styleType={styleType}
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
      styleType={styleType}
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
