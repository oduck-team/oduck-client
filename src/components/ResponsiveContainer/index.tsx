import { StrictPropsWithChildren } from "@/types";

import { Container } from "./style";

interface ContainerProps {
  readonly htmlType?: React.ElementType;
}

export default function ResponsiveContainer({
  htmlType = "div",
  children,
  ...props
}: StrictPropsWithChildren<ContainerProps>) {
  return (
    <Container as={htmlType} {...props}>
      {children}
    </Container>
  );
}
