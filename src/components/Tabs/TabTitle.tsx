import { Container } from "./TabTitle.styles";

export interface StyleProps {
  readonly active: boolean;
}

interface TabTitleProps extends StyleProps {
  readonly title?: string;
  readonly index: number;
  readonly setSelectedTab: (index: number) => void;
}

export default function TabTitle({
  title,
  index,
  setSelectedTab,
  active = false,
}: TabTitleProps) {
  return (
    <Container active={active} onClick={() => setSelectedTab(index)}>
      {title}
    </Container>
  );
}
