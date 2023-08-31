import { ComponentProps } from "react";

import { Message, TextInputBox, TextInputContainer } from "./style";

export interface TextInputProps extends ComponentProps<"input"> {
  readonly warn?: boolean;
  readonly message?: string;
  readonly className?: string;
  readonly icon?: React.ReactNode;
}

export interface TextInputBoxProps extends ComponentProps<"input"> {
  readonly warn?: boolean;
  readonly hasIcon?: boolean;
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
