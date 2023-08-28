import { ComponentProps } from "react";

import { Message, TextareaBox, TextareaContainer } from "./style";

export interface TextareaProps extends ComponentProps<"textarea"> {
  readonly warn?: boolean;
  readonly message?: string;
  readonly className?: string;
}

export interface TextareaBoxProps extends ComponentProps<"textarea"> {
  readonly warn?: boolean;
}

export default function Textarea({
  warn = false,
  message = "",
  style,
  className = "",
  ...rest
}: TextareaProps) {
  return (
    <TextareaContainer style={style} className={className}>
      <TextareaBox warn={warn} {...rest}></TextareaBox>
      {warn && message !== "" && <Message>{message}</Message>}
    </TextareaContainer>
  );
}
