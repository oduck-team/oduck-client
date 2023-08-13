import { ComponentProps } from "react";

import { Message, TextInputBox, TextInputContainer } from "./style";

export interface TextInputProps extends ComponentProps<"input"> {
  readonly warn?: boolean;
  readonly message?: string;
}

export interface TextInputBoxProps extends ComponentProps<"input"> {
  readonly warn?: boolean;
}

export default function TextInput({
  warn = false,
  message = "",
  style,
  ...rest
}: TextInputProps) {
  return (
    <TextInputContainer style={style}>
      <TextInputBox warn={warn} {...rest}></TextInputBox>
      {warn && message !== "" && <Message>{message}</Message>}
    </TextInputContainer>
  );
}
