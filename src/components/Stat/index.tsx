import { ComponentProps } from "react";

import {
  Container,
  StatContainer,
  Divider,
  Content,
  Title,
  Data,
  Text,
} from "./style";

interface StatItemProps {
  title?: string;
  data?: string;
  text?: string;
}

export interface StatStyleProps {
  primary?: boolean;
}

interface StatProps extends StatStyleProps, ComponentProps<"div"> {
  items: StatItemProps[];
  className?: string;
}

export default function Stat({ items, primary = false, ...props }: StatProps) {
  const getItems = ({ items }: StatProps) => {
    if (items.length === 1) {
      return (
        <Content>
          <Title>{items[0].title}</Title>
          <Data className="stat-data">{items[0].data}</Data>
          <Text>{items[0].text}</Text>
        </Content>
      );
    }
    return items.map((item, idx) => {
      return (
        <StatContainer key={idx}>
          <Content>
            <Title>{item.title}</Title>
            <Data className="stat-data">{item.data}</Data>
            <Text>{item.text}</Text>
          </Content>
          {idx < items.length - 1 && <Divider />}
        </StatContainer>
      );
    });
  };

  return (
    <Container primary={primary} {...props}>
      {getItems({ items })}
    </Container>
  );
}
