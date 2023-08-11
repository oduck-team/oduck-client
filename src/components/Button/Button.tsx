import { theme } from "@/styles/theme";
import { SolidBtn } from "./SolidBtn";
import { OutlineBtn } from "./OutlineBtn";
import { ComponentProps } from "react";
import { TextBtn } from "./TextBtn";

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
        <SolidBtn color={color} size={size} {...rest}>
          {children}
        </SolidBtn>
      );
    case "outline":
      return (
        <OutlineBtn color={color} size={size} {...rest}>
          {children}
        </OutlineBtn>
      );
    case "text":
      return (
        <TextBtn color={color} size={size}  {...rest}>
          {children}
        </TextBtn>
      );
    default:
      return (
        <SolidBtn color={color} size={size} {...rest}>
          {children}
        </SolidBtn>
      );
  }
}
