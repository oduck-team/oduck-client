import { ComponentProps } from "react";

import { StatContainer, Content, Title, Data, Description } from "./style";

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
  //TODO: data type 정해지면 변경
  const compactNumber = (data: string) =>
    Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(parseInt(data, 10));

  return (
    <StatContainer variant={variant} {...props}>
      {/* TODO: key={idx} 처리 */}
      {items.map((item, idx) => {
        return (
          <Content key={idx} variant={variant}>
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
