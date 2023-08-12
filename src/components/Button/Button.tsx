import { ComponentProps } from "react";

import { theme } from "@/styles/theme";

import { OutlineButton } from "./OutlineButton";
import { SolidButton } from "./SolidButton";
import { TextButton } from "./TextButton";

export type ButtonStyle = "solid" | "outline" | "text";
export type ButtonColor = keyof typeof theme.colors;
export type Size = "lg" | "md" | "sm";

export interface ButtonProps extends ComponentProps<"button"> {
  readonly styleType?: ButtonStyle;
  readonly color?: ButtonColor;
  readonly size?: Size;
}

export default function Button({
  styleType = "solid",
  color = "primary",
  size = "md",
  children,
  ...rest
}: ButtonProps) {
  switch (styleType) {
    case "solid":
      return (
        <SolidButton color={color} size={size} {...rest}>
          {children}
        </SolidButton>
      );
    case "outline":
      return (
        <OutlineButton color={color} size={size} {...rest}>
          {children}
        </OutlineButton>
      );
    case "text":
      return (
        <TextButton color={color} size={size} {...rest}>
          {children}
        </TextButton>
      );
    default:
      return (
        <SolidButton color={color} size={size} {...rest}>
          {children}
        </SolidButton>
      );
  }
}
