interface TabProps {
  readonly title?: string;
  readonly children?: React.ReactNode;
}

export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}
