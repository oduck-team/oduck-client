import { ComponentProps } from "react";

import { StatContainer, Content, Title, Data, Description } from "./style";

interface StatItemProps {
  title?: string;

  /**
   * 값이 number일 경우, 'compact' 표기법으로 변환합니다
   * @example 1000 - 1K, 50000, 50K
   */
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
  const compactNumber = (data: string | number) => {
    if (typeof data === "string") return data;

    return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(data);
  };

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
