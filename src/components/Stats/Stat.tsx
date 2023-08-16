import { StatContainer, Title, Data, Text } from "./style";

interface StatProps {
  readonly title?: string;
  readonly data?: string;
  readonly text?: string;
}

export function Stat({ title, data, text }: StatProps) {
  return (
    <StatContainer>
      <Title>{title}</Title>
      <Data className="stat-data">{data}</Data>
      <Text>{text}</Text>
    </StatContainer>
  );
}
