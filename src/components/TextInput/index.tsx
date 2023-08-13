import { ComponentProps } from "react";

import { Message, TextInputBox, TextInputContainer } from "./style";

export interface TextInputProps extends ComponentProps<"input"> {
  readonly warning?: boolean;
  readonly message?: string;
}

export interface TextInputBoxProps extends ComponentProps<"input"> {
  readonly warning?: boolean;
}

export default function TextInput({
  warning = false,
  message = "",
  style,
  ...rest
}: TextInputProps) {
  return (
    <TextInputContainer style={style}>
      <TextInputBox warning={warning} {...rest}></TextInputBox>
      {warning && message !== "" && <Message>{message}</Message>}
    </TextInputContainer>
  );
}
