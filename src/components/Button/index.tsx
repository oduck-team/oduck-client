import { ComponentProps } from "react";

import { theme } from "@/styles/theme";

import {
  ButtonContainer,
  ContentWrapper,
  IconWrapper,
  IconButtonContainer,
} from "./style";

export type Variant = "solid" | "outline" | "text";
export type Color = keyof Pick<typeof theme.colors, ColorKeys>;
type ColorKeys = "primary" | "neutral" | "warn";
export type Size = "xl" | "lg" | "md" | "sm";

export interface ButtonProps extends ComponentProps<"button"> {
  name: string;
  icon?: React.ReactNode;
  variant?: Variant;
  color?: Color;
  size?: Size;
  isBlock?: boolean;
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
      <IconButtonContainer
        aria-label={name}
        variant={variant}
        color={color}
        size={size}
        type={type}
        {...props}
      >
        <IconWrapper>{icon}</IconWrapper>
      </IconButtonContainer>
    );
  }

  return (
    <ButtonContainer
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
    </ButtonContainer>
  );
}
