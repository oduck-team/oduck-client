import { ComponentProps } from "react";

import { Container, Content, Title, Data, Description } from "./style";

interface StatItemProps {
  title?: string;
  data?: string;
  description?: string;
}

export type Variant = "primary" | "ghost";

export interface StatProps extends ComponentProps<"div"> {
  variant?: Variant;
  items: StatItemProps[];
  className?: string;
}

export default function Stat({
  items,
  variant = "primary",
  ...props
}: StatProps) {
  return (
    <Container variant={variant} {...props}>
      {/* TODO: key={idx} 처리 */}
      {items.map((item, idx) => (
        <Content key={idx} variant={variant}>
          {item.title && <Title>{item.title}</Title>}
          {item.data && <Data className="stat-data">{item.data}</Data>}
          {item.description && <Description>{item.description}</Description>}
        </Content>
      ))}
    </Container>
  );
}
