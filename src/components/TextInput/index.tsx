import { ComponentProps } from "react";

import { Message, TextInputBox, TextInputContainer } from "./style";

export interface TextInputProps extends ComponentProps<"input"> {
  warn?: boolean;
  message?: string;
  className?: string;
  icon?: React.ReactNode;
}

export interface TextInputBoxProps extends ComponentProps<"input"> {
  warn?: boolean;
  hasIcon?: boolean;
}

export default function TextInput({
  warn = false,
  message = "",
  style,
  icon,
  className = "",
  ...rest
}: TextInputProps) {
  return (
    <TextInputContainer warn={warn} style={style} className={className}>
      {icon}
      <TextInputBox
        warn={warn}
        hasIcon={Boolean(icon)}
        {...rest}
      ></TextInputBox>
      {warn && message !== "" && <Message>{message}</Message>}
    </TextInputContainer>
  );
}
