import { ComponentProps } from "react";

import { Container, Content, Title, Data, Description } from "./style";

interface StatItemProps {
  title?: string;
  data?: string;
  description?: string;
}

export type Varient = "primary" | "ghost";

export interface StatProps extends ComponentProps<"div"> {
  varient?: Varient;
  items: StatItemProps[];
  className?: string;
}

export default function Stat({
  items,
  varient = "primary",
  ...props
}: StatProps) {
  return (
    <Container varient={varient} {...props}>
      {/* TODO: key={idx} 처리 */}
      {items.map((item, idx) => (
        <Content key={idx}>
          {item.title && <Title>{item.title}</Title>}
          {item.data && <Data className="stat-data">{item.data}</Data>}
          {item.description && <Description>{item.description}</Description>}
        </Content>
      ))}
    </Container>
  );
}
