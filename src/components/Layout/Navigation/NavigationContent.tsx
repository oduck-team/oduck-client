import styled from "@emotion/styled";

import { StrictPropsWithChildren } from "@/types";

export default function NavigationContent({
  children,
}: StrictPropsWithChildren) {
  return <Container>{children}</Container>;
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;
