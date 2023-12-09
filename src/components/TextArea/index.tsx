import { ComponentProps, useEffect, useRef, useState } from "react";

import { Message, TextareaBox, TextareaContainer } from "./style";

export interface TextareaProps extends ComponentProps<"textarea"> {
  warn?: boolean;
  message?: string;
  className?: string;
  /** px단위 */
  height?: string;
}

export interface TextareaBoxProps extends ComponentProps<"textarea"> {
  warn?: boolean;
  negativeMargin: number; // scale 후 여백 제거를 위한 negative margin
  height?: string; // px단위
}

export default function Textarea({
  warn = false,
  message = "",
  style,
  className = "",
  height,
  ...rest
}: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [negativeMargin, setNegativeMargin] = useState(0);

  useEffect(() => {
    if (textareaRef.current) {
      const offsetHeight = textareaRef.current.offsetHeight; // 원본 textarea height
      const height = offsetHeight * 0.875; // scale 적용이 된 height
      setNegativeMargin(-(offsetHeight - height));
    }
  }, []);

  return (
    <TextareaContainer style={style} className={className}>
      <TextareaBox
        negativeMargin={negativeMargin}
        ref={textareaRef}
        warn={warn}
        height={height}
        {...rest}
      />
      {warn && message !== "" && <Message>{message}</Message>}
    </TextareaContainer>
  );
}
