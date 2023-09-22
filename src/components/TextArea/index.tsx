import { ComponentProps } from "react";

import { Message, TextareaBox, TextareaContainer } from "./style";

export interface TextareaProps extends ComponentProps<"textarea"> {
  warn?: boolean;
  message?: string;
  className?: string;
}

export interface TextareaBoxProps extends ComponentProps<"textarea"> {
  warn?: boolean;
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
