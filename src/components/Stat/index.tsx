import { ComponentProps } from "react";

import { compactNumber } from "@/utils/common";

import { StatContainer, Content, Title, Data, Description } from "./style";

interface StatItemProps {
  title?: string;
  data?: number | string;
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
    <StatContainer variant={variant} {...props}>
      {items.map((item, index) => {
        return (
          <Content key={index} variant={variant}>
            {item.title && <Title>{item.title}</Title>}
            {item.data && (
              <Data className="stat-data">{compactNumber(item.data)}</Data>
            )}
            {item.description && <Description>{item.description}</Description>}
          </Content>
        );
      })}
    </StatContainer>
  );
}
